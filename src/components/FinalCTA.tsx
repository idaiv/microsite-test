export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Revolutionize Your Content Workflow?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of content creators, developers, and marketers who've already 
          transformed their workflow with Pimcore Studio.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="https://pimcore.com/en/resources/download" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Try Studio Free
          </a>
          <a 
            href="https://github.com/pimcore/studio-ui" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            View on GitHub
          </a>
          <a 
            href="https://pimcore.com/en/resources/documentation" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            Documentation
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold mb-2">100%</div>
            <div className="text-blue-200">Open Source</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">10k+</div>
            <div className="text-blue-200">Active Users</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">24/7</div>
            <div className="text-blue-200">Community Support</div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-500">
          <p className="text-blue-200 mb-4">
            Questions? Need help getting started?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="mailto:hello@pimcore.com" className="text-blue-200 hover:text-white">
              📧 hello@pimcore.com
            </a>
            <a href="https://pimcore.com/en/resources/community" className="text-blue-200 hover:text-white">
              💬 Community Forum
            </a>
            <a href="https://pimcore.com/en/about/contact" className="text-blue-200 hover:text-white">
              📞 Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}