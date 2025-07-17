export default function WhatIsStudio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What is Pimcore Studio?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Pimcore Studio is the next-generation user interface for Pimcore, 
              designed to streamline content creation and management workflows. 
              Built with modern web technologies, it offers an intuitive, 
              responsive experience that adapts to your team's needs.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're managing product data, creating digital experiences, 
              or orchestrating omnichannel campaigns, Pimcore Studio provides 
              the tools and flexibility to work efficiently and effectively.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Live Editing
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Real-time Preview
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Customizable UI
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                Omnichannel Ready
              </span>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-500">Studio Interface Preview</p>
              <p className="text-sm text-gray-400 mt-2">Visual coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}