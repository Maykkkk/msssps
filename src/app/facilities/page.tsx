import Image from 'next/image'

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Facilities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            State-of-the-art infrastructure to support learning and growth.
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">World-Class Infrastructure</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our campus is designed to provide the best possible environment for learning and development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {[
            {
              title: "Modern Classrooms",
              description: "Spacious, well-ventilated classrooms equipped with smart boards and digital learning tools to enhance the teaching-learning experience.",
              image: "/assets/images/classroom.jpg"
            },
            {
              title: "Science Laboratories",
              description: "Fully-equipped physics, chemistry, and biology labs that allow students to learn through hands-on experimentation and discovery.",
              image: "/assets/images/science-lab.jpg"
            }
          ].map((facility, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="relative h-64">
                <Image 
                  src={facility.image} 
                  alt={facility.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Library",
              icon: "📚",
              description: "Extensive collection of books, journals, and digital resources"
            },
            {
              title: "Computer Lab",
              icon: "💻",
              description: "High-tech lab with latest software and internet access"
            },
            {
              title: "Sports Complex",
              icon: "⚽",
              description: "Indoor and outdoor facilities for various sports"
            },
            {
              title: "Auditorium",
              icon: "🎭",
              description: "500-seat auditorium for events and performances"
            },
            {
              title: "Cafeteria",
              icon: "🍎",
              description: "Healthy and hygienic food options for students"
            },
            {
              title: "Medical Room",
              icon: "🏥",
              description: "First-aid facilities with trained staff"
            }
          ].map((facility, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{facility.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sports Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Outdoor</h4>
              <ul className="space-y-2">
                {["Cricket ground", "Football field", "Basketball court", 
                  "Volleyball court", "Athletics track", "Tennis court"].map((sport, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{sport}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Indoor</h4>
              <ul className="space-y-2">
                {["Badminton", "Table tennis", "Chess", 
                  "Carrom", "Gymnastics", "Yoga room"].map((sport, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{sport}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}