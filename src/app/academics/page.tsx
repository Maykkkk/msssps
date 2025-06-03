export default function AcademicsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academics</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Excellence in education through innovative teaching and comprehensive curriculum.
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Academic Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a balanced curriculum that challenges students while supporting their individual growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Primary School",
              description: "Grades 1-5: Building strong foundations in core subjects while fostering curiosity.",
              features: ["Interactive learning", "Activity-based curriculum", "Focus on literacy & numeracy"]
            },
            {
              title: "Middle School",
              description: "Grades 6-8: Developing critical thinking and independent learning skills.",
              features: ["Subject specialization begins", "Project-based learning", "Skill development focus"]
            },
            {
              title: "High School",
              description: "Grades 9-12: Preparing students for board exams and higher education.",
              features: ["Science/Commerce streams", "Comprehensive test preparation", "Career guidance"]
            }
          ].map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <ul className="space-y-2">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 rounded-xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Curriculum Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Subjects</h4>
              <ul className="space-y-2">
                {["Mathematics", "Science (Physics, Chemistry, Biology)", "English Language & Literature", 
                  "Hindi", "Social Studies (History, Geography, Civics)", "Computer Science"].map((subject, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{subject}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Electives & Extras</h4>
              <ul className="space-y-2">
                {["Physical Education", "Art & Craft", "Music", "Dance", "Yoga", 
                  "Foreign Languages (French, Sanskrit)", "Robotics"].map((subject, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{subject}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Academic Calendar</h3>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 border-b">
              <div className="bg-blue-600 text-white p-4 font-bold">Event</div>
              <div className="bg-blue-600 text-white p-4 font-bold">Date</div>
              <div className="bg-blue-600 text-white p-4 font-bold">Duration</div>
              <div className="bg-blue-600 text-white p-4 font-bold">Details</div>
            </div>
            {[
              {
                event: "First Term Begins",
                date: "April 1, 2024",
                duration: "-",
                details: "Start of academic year"
              },
              {
                event: "Summer Break",
                date: "May 15, 2024",
                duration: "6 weeks",
                details: "School closed for summer vacation"
              },
              {
                event: "Mid-Term Exams",
                date: "September 10-20, 2024",
                duration: "10 days",
                details: "Exams for all classes"
              },
              {
                event: "Annual Day",
                date: "November 25, 2024",
                duration: "1 day",
                details: "Cultural program and prize distribution"
              }
            ].map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 border-b hover:bg-gray-50">
                <div className="p-4 font-medium">{item.event}</div>
                <div className="p-4">{item.date}</div>
                <div className="p-4">{item.duration}</div>
                <div className="p-4">{item.details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}