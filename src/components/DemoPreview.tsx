import { useState } from 'react';

const screenshots = [
  {
    id: 'dashboard',
    title: 'Dashboard Overview',
    description: 'Get a bird\'s-eye view of your content ecosystem with customizable widgets and real-time analytics.',
    image: '/screenshots/dashboard.png'
  },
  {
    id: 'editor',
    title: 'Live Content Editor',
    description: 'Edit content with immediate visual feedback across all your channels and devices.',
    image: '/screenshots/editor.png'
  },
  {
    id: 'preview',
    title: 'Multi-Channel Preview',
    description: 'See how your content looks on web, mobile, and other channels before publishing.',
    image: '/screenshots/preview.png'
  },
  {
    id: 'workflow',
    title: 'Workflow Management',
    description: 'Streamline approval processes with visual workflow tools and collaboration features.',
    image: '/screenshots/workflow.png'
  }
];

export default function DemoPreview() {
  const [activeScreenshot, setActiveScreenshot] = useState(screenshots[0].id);
  
  const currentScreenshot = screenshots.find(s => s.id === activeScreenshot) || screenshots[0];

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            See Studio in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the power and elegance of Pimcore Studio's interface
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Screenshot Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {screenshots.map((screenshot) => (
                <button
                  key={screenshot.id}
                  onClick={() => setActiveScreenshot(screenshot.id)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    activeScreenshot === screenshot.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {screenshot.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Screenshot Display */}
          <div className="lg:col-span-3">
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {currentScreenshot.title}
                </h3>
                <p className="text-gray-600">
                  {currentScreenshot.description}
                </p>
              </div>
              
              {/* Placeholder for actual screenshot */}
              <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">{currentScreenshot.title}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Interactive demo and screenshots coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-blue-50 rounded-lg p-6">
            <div className="text-blue-600 mr-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900">
                Want to Try it Yourself?
              </h3>
              <p className="text-gray-600 mt-1">
                Get hands-on experience with a full interactive demo
              </p>
            </div>
            <button className="ml-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Launch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}