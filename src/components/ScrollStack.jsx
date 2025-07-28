import React, { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

export const ScrollStackItem = ({ children, itemClassName = "", style = {} }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()} style={style}>{children}</div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "50%",
  scaleEndPosition = "40%",
  baseScale = 0.92,
  rotationAmount = 0,
  blurAmount = 1.5,
  scrollZoneMultiplier = 5, // New prop: multiplies scroll distance for each card
  onStackComplete,
}) => {
  const containerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const cardsRef = useRef([]);
  const lenisRef = useRef(null);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const updateCardTransforms = useCallback(() => {
    const container = containerRef.current;
    if (!container || !cardsRef.current.length) return;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    
    const endElement = container.querySelector('.scroll-stack-end');
    const endElementRect = endElement?.getBoundingClientRect();
    const endElementTop = endElementRect ? endElementRect.top + scrollTop : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardRect = card.getBoundingClientRect();
      const cardTop = cardRect.top + scrollTop;
      
      // Virtual scroll positions - multiply the distance between cards
      const virtualScrollDistance = itemDistance * scrollZoneMultiplier;
      const virtualCardTop = cardTop + (i * (virtualScrollDistance - itemDistance));
      
      // Use virtual positions for triggers to create larger active zones
      const triggerStart = virtualCardTop - containerHeight + stackPositionPx;
      const triggerEnd = virtualCardTop - scaleEndPositionPx;
      const pinStart = virtualCardTop - containerHeight + stackPositionPx;
      const pinEnd = endElementTop - containerHeight + (cardsRef.current.length * (virtualScrollDistance - itemDistance));

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + (i * itemScale);
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      // Blur calculation with virtual scroll positions
      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          if (cardsRef.current[j]) {
            const jCardRect = cardsRef.current[j].getBoundingClientRect();
            const jCardTop = jCardRect.top + scrollTop;
            const jVirtualCardTop = jCardTop + (j * (virtualScrollDistance - itemDistance));
            const jTriggerStart = jVirtualCardTop - containerHeight + stackPositionPx;
            if (scrollTop >= jTriggerStart) {
              topCardIndex = j;
            }
          }
        }
        
        if (i < topCardIndex) {
          blur = Math.max(0, (topCardIndex - i) * blurAmount);
        }
      }

      // Position calculation - use actual card position, not virtual
      let translateY = 0;
      const actualPinStart = cardTop - containerHeight + stackPositionPx;
      const isPinned = scrollTop >= actualPinStart && scrollTop <= pinEnd;
      
      if (isPinned) {
        const stackOffset = itemStackDistance * i;
        translateY = scrollTop - cardTop + containerHeight - stackPositionPx - stackOffset;
      } else if (scrollTop > pinEnd) {
        const stackOffset = itemStackDistance * i;
        translateY = pinEnd - cardTop + containerHeight - stackPositionPx - stackOffset;
      }

      // Apply transforms
      const transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      const filter = blur > 0 ? `blur(${blur}px)` : '';

      card.style.transform = transform;
      card.style.filter = filter;

      // Stack completion callback
      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    scrollZoneMultiplier,
    onStackComplete,
    calculateProgress,
    parsePercentage,
  ]);

  const handleScroll = useCallback(() => {
    // Cancel any pending animation frame to prevent conflicts
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    // Use RAF to ensure smooth updates
    animationFrameRef.current = requestAnimationFrame(() => {
      updateCardTransforms();
    });
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    // Prevent multiple Lenis instances
    if (typeof window !== 'undefined' && window.__lenis) {
      window.__lenis.on('scroll', handleScroll);
      lenisRef.current = window.__lenis;
      return window.__lenis;
    }

    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      normalizeWheel: true,
      wheelMultiplier: 1,
      touchInertiaMultiplier: 35,
      lerp: 0.12,
      syncTouch: true,
      syncTouchLerp: 0.1,
      touchInertia: 0.5,
    });

    lenis.on('scroll', handleScroll);

    const lenisRAF = (time) => {
      lenis.raf(time);
      requestAnimationFrame(lenisRAF);
    };
    requestAnimationFrame(lenisRAF);

    lenisRef.current = lenis;
    // Store globally to prevent duplicates
    if (typeof window !== 'undefined') {
      window.__lenis = lenis;
    }
    
    return lenis;
  }, [handleScroll]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll(".scroll-stack-card"));
    cardsRef.current = cards;

    // Initialize card styles
    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
    });

    // Setup Lenis
    setupLenis();
    
    // Initial transform update
    updateCardTransforms();

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.off('scroll', handleScroll);
        // Only destroy if we created this instance
        if (typeof window !== 'undefined' && window.__lenis === lenisRef.current) {
          lenisRef.current.destroy();
          delete window.__lenis;
        }
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    scrollZoneMultiplier,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
    handleScroll,
  ]);

  // Calculate virtual height for extended scroll zones
  const childCount = React.Children.count(children);
  const virtualHeight = childCount > 0 ? (childCount - 1) * itemDistance * (scrollZoneMultiplier - 1) : 0;

  return (
    <div
      className={`scroll-stack-scroller ${className}`.trim()}
      ref={containerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
        {/* Invisible spacer to extend scroll distance */}
        <div style={{ height: `${virtualHeight}px`, visibility: 'hidden', pointerEvents: 'none' }} />
      </div>
    </div>
  );
};

export default ScrollStack;