import Image from 'next/image'

export default function StudentLifePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Life</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Beyond academics - a vibrant campus life full of opportunities.
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Life at Maa Sharda</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our students enjoy a balanced school life with academics, sports, arts, and community activities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/student-life1.jpg" 
              alt="Student Activities"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Activities & Clubs</h3>
            <p className="text-gray-600 mb-6 text-lg">
              We offer a wide range of extracurricular activities to help students discover their passions 
              and develop new skills outside the classroom.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Science Club", "Literary Club", "Drama Club", "Music Club", 
                "Debate Society", "Eco Club", "Robotics Club", "Art Club"].map((club, i) => (
                  <div key={i} className="bg-blue-50 px-4 py-3 rounded-lg">
                    <p className="font-medium text-blue-800">{club}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Sports & Fitness</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Physical education is an integral part of our curriculum, with facilities for both competitive 
              sports and recreational activities.
            </p>
            <ul className="space-y-3">
              {["Annual Sports Day with track and field events", "Inter-house competitions throughout the year", 
                "Training sessions with professional coaches", "Yoga and meditation classes for mental wellbeing"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/sports.jpg" 
              alt="Sports Activities"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Annual Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                event: "Annual Day",
                description: "Cultural extravaganza showcasing student talents",
                image: "/annual-day.jpg"
              },
              {
                event: "Science Exhibition",
                description: "Innovative projects by young scientists",
                image: "/science-expo.jpg"
              },
              {
                event: "Literary Fest",
                description: "Debates, quizzes, and creative writing competitions",
                image: "/literary-fest.jpg"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="relative h-48">
                  <Image 
                    src={event.image} 
                    alt={event.event}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{event.event}</h4>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Student Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6 text-lg">
                We believe in empowering students through leadership opportunities that build confidence 
                and responsibility.
              </p>
              <ul className="space-y-3">
                {["Student Council with elected representatives", "House Captains and Vice Captains", 
                  "Club Presidents and Secretaries", "Peer mentoring programs"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image 
                src="/student-council.jpg" 
                alt="Student Council"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}