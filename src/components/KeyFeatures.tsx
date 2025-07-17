import { useState } from 'react';

const features = [
  {
    id: 'live-editing',
    title: 'Live Editing & Preview',
    description: 'Edit content in real-time with instant visual feedback. See changes as you make them across all your channels and devices.',
    icon: '⚡',
    highlights: ['WYSIWYG editing', 'Real-time collaboration', 'Instant preview', 'Multi-device testing']
  },
  {
    id: 'omnichannel',
    title: 'Omnichannel Experience',
    description: 'Manage content for web, mobile, print, and digital displays from a single interface. Consistent brand experience everywhere.',
    icon: '🌐',
    highlights: ['Cross-channel publishing', 'Responsive design', 'API-first approach', 'Content syndication']
  },
  {
    id: 'customization',
    title: 'UI Customization',
    description: 'Tailor the interface to match your workflow. Create custom dashboards, shortcuts, and layouts that work for your team.',
    icon: '🎨',
    highlights: ['Custom dashboards', 'Flexible layouts', 'Personalized workflows', 'Brand customization']
  }
];

export default function KeyFeatures() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful capabilities designed to transform how you work with content
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`w-full text-left p-6 rounded-lg border-2 transition-all ${
                    activeFeature === feature.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{feature.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Content */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{currentFeature.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {currentFeature.title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                {currentFeature.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {currentFeature.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Placeholder for feature visual */}
              <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">{currentFeature.icon}</span>
                  </div>
                  <p className="text-gray-500">{currentFeature.title} Demo</p>
                  <p className="text-sm text-gray-400 mt-2">Interactive demo coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}