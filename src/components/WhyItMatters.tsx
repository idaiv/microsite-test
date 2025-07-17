const benefits = [
  {
    icon: '🚀',
    title: 'Accelerate Time-to-Market',
    description: 'Launch campaigns and content 3x faster with streamlined workflows and real-time collaboration.'
  },
  {
    icon: '💰',
    title: 'Reduce Operational Costs',
    description: 'Eliminate redundant processes and reduce training time with an intuitive, unified interface.'
  },
  {
    icon: '🎯',
    title: 'Improve Content Quality',
    description: 'Ensure brand consistency and content accuracy with live preview and validation tools.'
  },
  {
    icon: '⚡',
    title: 'Boost Team Productivity',
    description: 'Empower both technical and marketing teams with tools designed for their specific needs.'
  },
  {
    icon: '🔧',
    title: 'Scale Effortlessly',
    description: 'Adapt to growing content demands without compromising performance or user experience.'
  },
  {
    icon: '🌟',
    title: 'Future-Proof Investment',
    description: 'Built on modern architecture that evolves with your business and technology needs.'
  }
];

export default function WhyItMatters() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why It Matters
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your content operations with measurable business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Content Workflow?</h3>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Join forward-thinking companies who've already made the switch to Pimcore Studio 
            and experienced dramatic improvements in their content operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}