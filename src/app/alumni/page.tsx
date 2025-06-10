import Image from 'next/image'

export default function AlumniPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Alumni Network</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connecting our past students with the present school community.
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Alumni Community</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with your alma mater and fellow alumni through our vibrant network.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Alumni Association</h3>
            <p className="text-gray-600 mb-6 text-lg">
              The Maa Sharda Alumni Association serves as a bridge between former students and the school, 
              fostering lifelong connections and supporting current students through mentorship and scholarships.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Our alumni are our pride, excelling in diverse fields across the globe while carrying forward 
              the values instilled during their time at Maa Sharda.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Join the Alumni Network
            </button>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/alumni-meet.jpg" 
              alt="Alumni Meet"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Notable Alumni</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Anil Kapoor",
                batch: "1995",
                achievement: "Renowned Cardiologist at AIIMS Delhi",
                image: "/alumni1.jpg"
              },
              {
                name: "Neha Sharma",
                batch: "2005",
                achievement: "Software Engineer at Google",
                image: "/alumni2.jpg"
              },
              {
                name: "Rajat Verma",
                batch: "2010",
                achievement: "IAS Officer, UP Cadre",
                image: "/alumni3.jpg"
              }
            ].map((alumni, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="relative h-64">
                  <Image 
                    src={alumni.image} 
                    alt={alumni.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900">{alumni.name}</h4>
                  <p className="text-blue-600 font-medium mb-2">Batch of {alumni.batch}</p>
                  <p className="text-gray-600">{alumni.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Alumni Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                event: "Annual Alumni Meet",
                date: "January 15, 2024",
                description: "Reunion for all alumni batches with cultural program"
              },
              {
                event: "Career Guidance Session",
                date: "March 5, 2024",
                description: "Alumni sharing career experiences with current students"
              },
              {
                event: "Sports Day",
                date: "November 20, 2024",
                description: "Alumni vs Current Students matches"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{event.event}</h4>
                <p className="text-blue-600 font-medium mb-3">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}