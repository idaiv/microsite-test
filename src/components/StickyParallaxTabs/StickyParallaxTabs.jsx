import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import MagicBento from '../MagicBento';

const StickyParallaxTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const totalTabs = 3;

  const tabs = [
    { id: 0, prefix: 'For', main: 'Customers' },
    { id: 1, prefix: 'For', main: 'Solution Partners' },
    { id: 2, prefix: 'For', main: 'Developers' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in view
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      
      // Lock when section reaches top of viewport
      if (sectionTop <= 0 && sectionBottom > windowHeight) {
        setIsLocked(true);
        
        // Calculate scroll progress within the locked section
        const scrollDistance = Math.abs(sectionTop);
        const maxScroll = (totalTabs - 1) * windowHeight; // 2 full scrolls for 3 tabs
        const progress = Math.min(scrollDistance / maxScroll, 1);
        setScrollProgress(progress);
        
        // Update active tab based on progress
        const newTab = Math.floor(progress * totalTabs);
        const clampedTab = Math.min(newTab, totalTabs - 1);
        if (clampedTab !== activeTab) {
          setActiveTab(clampedTab);
        }
        
        // Unlock when we've scrolled through all content
        if (progress >= 1) {
          setIsLocked(false);
        }
      } else if (sectionTop > 0 || sectionBottom <= windowHeight) {
        // Section is not in "sticky" range
        setIsLocked(false);
        
        // Reset if we scroll back up
        if (sectionTop > 0) {
          setScrollProgress(0);
          setActiveTab(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLocked, activeTab, totalTabs]);

  const scrollToTab = (tabIndex) => {
    setActiveTab(tabIndex);
    // Smooth scroll to that tab's position
    const targetProgress = tabIndex / (totalTabs - 1);
    setScrollProgress(targetProgress);
  };

  // Content data for each tab
  const contentData = [
    {
      title: "For Customers",
      cards: [
        { title: "Simply Damn Fast.", desc: "We know data and experience management—complex models, massive product catalogs, rich digital assets. Now, it's up to 300% faster. Working with Pimcore has never felt this satisfying." },
        { title: "Ugly No More. Pimcore Got Hot.", desc: "They sometimes called it powerful but ugly—like Windows XP with superpowers. Now? It's a stunning, intuitive, pixel-perfect revolution in UX. Not just an upgrade. A transformation." },
        { title: "Still 100% Yours. Now More Customizable Than Ever.", desc: "Pimcore is still the beast you love — now fully tailored to you. With Pimcore Studio, no SaaS limits. No compromises. Just pure flexibility for PIM, MDM, DAM, CDP, and more. Powerful. Adaptable. Effortless. Make it yours. Like always." },
        { title: "A Whole New Way to Work.", desc: "No migration. No disruption. Pimcore Studio works with your existing data and setup — instantly. It's not a new product. It's a new experience. Built for maximum productivity, efficiency, and freedom. Faster than ever. Smarter than before. This is how working with Pimcore was always meant to feel." }
      ]
    },
    {
      title: "For Solution Partners",
      cards: [
        { title: "The Only Real PXM", desc: "Pimcore is the one true Product Experience Management platform — Gartner-recognized and loaded with award-winning features. Now with a stunning design, unmatched flexibility, and blazing speed, it's not just powerful — it's magical to pitch." },
        { title: "Just 100% Fitting Solutions", desc: "No two solutions are ever the same. Whether it's B2B, B2C, or something in between — your customers expect tailored experiences that fit their workflows and data perfectly. With Pimcore Studio, you get the freedom to customize everything." },
        { title: "Boosted Efficiency", desc: "With Pimcore Studio, your team ships faster. Streamlined workflows, shorter dev cycles, and less friction mean you deliver high-quality solutions — quicker than ever. Work smarter. Impress clients. Win more business." },
        { title: "Built for Modern Dev Teams", desc: "Pimcore is no longer just PHP — and that's great news for agencies. With a React-based Studio UI and open APIs, it's easier than ever to find the right talent and get projects moving fast. Faster onboarding. Bigger talent pool. No tech lock-in." },
        { title: "Faster Delivery", desc: "Pimcore Studio is built with the Studio SDK — and so are all its components. Grids, trees, windows, widgets — everything your agency needs is ready to reuse, customize, and scale. Deliver tailored solutions faster with flexible, battle-tested UI building blocks." }
      ]
    },
    {
      title: "For Developers",
      cards: [
        { title: "Pimcore Studio SDK", desc: "Customizing Pimcore has never been this smooth. Built on React, the Studio SDK gives you full control over UI and data tools — right out of the box. Create tailored experiences, adapt every component, and build exactly what your customers need. All power. No limits. 100% yours." },
        { title: "Pimcore Studio Backend APIs", desc: "The Studio Backend gives you full access to APIs, real-time updates, and the tools to shape Pimcore your way. It's the powerful engine behind Pimcore Studio — now yours to extend and adapt. Customize faster. Work smarter. Unlock Pimcore." },
        { title: "Language Agnostic", desc: "Pimcore is no longer just PHP — that era is over. Use React to customize the UI. Integrate with the Studio APIs using Python, .NET, or any language you prefer. We're open — just like you." },
        { title: "Beautiful by Design", desc: "It's about building beautiful, intuitive experiences. The Pimcore Studio SDK gives you full access to our Ant Design-powered UI, complete with components and Storybook. Build faster. Design better. Wow users." },
        { title: "Your Building Blocks for Efficiency", desc: "Pimcore Studio is built with the Studio SDK — and so are all its components. Grids, trees, windows, widgets — ready to reuse, customize, and extend. Build smarter with proven, flexible UI blocks." },
        { title: "Auto Code", desc: "The Pimcore Studio SDK is fully documented and built on a clean, React-based framework — pure magic for your favorite LLM. It's the perfect foundation for smart, automated code generation. Less typing. More creating." }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`${styles.parallaxSection} ${isLocked ? styles.locked : ''}`}
      style={{ height: `${totalTabs * 100}vh` }} // Make section tall enough for scroll hijacking
    >
      <div className={`${styles.sectionContainer} ${isLocked ? styles.fixed : ''}`}>
        {/* Fixed Left Navigation */}
        <nav className={styles.leftNavigation}>
          <div className={styles.navContent}>
            <h2 className={styles.navTitle}>Built for Everyone</h2>
            <div className={styles.tabButtons}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToTab(tab.id)}
                  className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                >
                  <span className={styles.tabPrefix}>{tab.prefix}</span>
                  <span className={styles.tabMain}>{tab.main}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Right Content Area */}
        <div className={styles.contentContainer}>
          {/* Background Elements */}
          <div className={styles.backgroundElements}>
            <div 
              className={styles.floatingShape} 
              style={{ 
                transform: `translateY(${scrollProgress * -50}px) translateX(${scrollProgress * 30}px)`,
                top: '20%', 
                right: '20%' 
              }}
            />
            <div 
              className={styles.floatingShape} 
              style={{ 
                transform: `translateY(${scrollProgress * 40}px) translateX(${scrollProgress * -20}px)`,
                top: '60%', 
                right: '10%' 
              }}
            />
          </div>

          {/* Current Content */}
          <div className={styles.contentPage}>
            <div className="max-w-7xl mx-auto" style={{paddingLeft: '0.75rem'}}>
              <h2 className={styles.pageTitle}>{contentData[activeTab].title}</h2>
              <div className={`${styles.cardGrid} ${contentData[activeTab].cards.length === 4 ? styles.fourCards : ''}`}>
                {contentData[activeTab].cards.map((card, index) => (
                  <MagicBento
                    key={index}
                    textAutoHide={false}
                    enableStars={false}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={false}
                    clickEffect={false}
                    spotlightRadius={250}
                    particleCount={4}
                    glowColor="132, 0, 255"
                    className="backdrop-blur-md rounded-2xl p-6"
                    style={{
                      backgroundColor: 'rgba(18, 3, 29, 0.65)',
                      border: '1px solid rgba(47, 15, 69, 0.61)',
                      transform: `translateY(${scrollProgress * (index * 10)}px)`,
                      opacity: 1 - (scrollProgress * 0.1)
                    }}
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-sm" style={{color: '#E8E4EF'}}>{card.desc}</p>
                  </MagicBento>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyParallaxTabs;