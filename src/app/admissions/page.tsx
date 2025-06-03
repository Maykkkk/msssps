export default function AdmissionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our community of learners and achievers.
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Admission Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We welcome applications from students who are eager to learn and grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              step: "1",
              title: "Inquiry",
              description: "Submit an inquiry form or visit the school for information"
            },
            {
              step: "2",
              title: "Application",
              description: "Complete and submit the application form with required documents"
            },
            {
              step: "3",
              title: "Assessment",
              description: "Student assessment (if applicable for the grade level)"
            },
            {
              step: "4",
              title: "Interaction",
              description: "Meeting with school administration and parents"
            },
            {
              step: "5",
              title: "Decision",
              description: "Admission decision communicated to parents"
            },
            {
              step: "6",
              title: "Enrollment",
              description: "Complete fee payment and enrollment formalities"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 rounded-xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Important Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Age Criteria</h4>
              <ul className="space-y-2">
                {["Nursery: 3+ years as of April 1", "KG: 4+ years", 
                  "Class 1: 5+ years", "Add one year for each subsequent class"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h4>
              <ul className="space-y-2">
                {["Birth certificate", "Previous school reports (if applicable)", 
                  "Transfer certificate (for Class 2 and above)", "Passport size photographs", 
                  "Aadhar card copy"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Fee Structure</h3>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-3 bg-blue-600 text-white p-4 font-bold">
                <div>Grade</div>
                <div>Annual Fee</div>
                <div>Admission Fee</div>
              </div>
              {[
                { grade: "Nursery-KG", annual: "₹25,000", admission: "₹5,000" },
                { grade: "Class 1-5", annual: "₹30,000", admission: "₹7,000" },
                { grade: "Class 6-8", annual: "₹35,000", admission: "₹8,000" },
                { grade: "Class 9-10", annual: "₹40,000", admission: "₹10,000" },
                { grade: "Class 11-12", annual: "₹45,000", admission: "₹12,000" }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-3 border-b hover:bg-gray-50">
                  <div className="p-4 font-medium">{item.grade}</div>
                  <div className="p-4">{item.annual}</div>
                  <div className="p-4">{item.admission}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">*Transportation and other charges extra</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply Online</h3>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Student`s` Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="grade" className="block text-gray-700 font-medium mb-2">Grade Applying For</label>
                  <select 
                    id="grade" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Grade</option>
                    <option value="nursery">Nursery</option>
                    <option value="kg">KG</option>
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="parent" className="block text-gray-700 font-medium mb-2">Parent`s` Name</label>
                  <input 
                    type="text" 
                    id="parent" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}