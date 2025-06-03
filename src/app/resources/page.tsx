export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Tools and information to support students, parents, and staff.
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access important documents, links, and information for the school community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Academic Calendar",
              description: "Download the current academic year calendar with important dates",
              link: "Download PDF"
            },
            {
              title: "School Handbook",
              description: "Comprehensive guide to school policies and procedures",
              link: "View Online"
            },
            {
              title: "Uniform Guidelines",
              description: "Details about school uniform requirements",
              link: "Download PDF"
            },
            {
              title: "Exam Schedule",
              description: "Term-wise examination dates and syllabus",
              link: "View Schedule"
            },
            {
              title: "Library Catalog",
              description: "Search our extensive library collection",
              link: "Access Catalog"
            },
            {
              title: "Bus Routes",
              description: "Transportation schedule and pickup points",
              link: "View Routes"
            }
          ].map((resource, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{resource.title}</h3>
              <p className="text-gray-600 mb-6">{resource.description}</p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">
                {resource.link} →
              </a>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 rounded-xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Parent Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Parent Portal</h4>
              <p className="text-gray-600 mb-6">
                Access your child`s` academic progress, attendance records, and school announcements through our secure parent portal.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Login to Parent Portal
              </button>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Parent-Teacher Association</h4>
              <p className="text-gray-600 mb-6">
                Learn about PTA activities, meeting schedules, and how to get involved in school initiatives.
              </p>
              <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
                PTA Information
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Student Portals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Learning Management System",
                description: "Access course materials, assignments, and grades",
                button: "Go to LMS"
              },
              {
                title: "E-Library",
                description: "Digital books, journals, and research resources",
                button: "Access E-Library"
              },
              {
                title: "Career Guidance",
                description: "Resources for higher education and career planning",
                button: "Explore Careers"
              }
            ].map((portal, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{portal.title}</h3>
                <p className="text-gray-600 mb-6">{portal.description}</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  {portal.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}