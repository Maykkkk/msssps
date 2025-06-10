import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our School</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the rich history and values that make Maa Sharda School special.
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
            <p className="text-gray-600 mb-4 text-lg">
              Established in 1990, Maa Sharda Sr. Sec. Public School has been a beacon of quality education in the region. 
              Founded with the vision to provide holistic education, our school has grown from humble beginnings to become 
              one of the most respected educational institutions in the area.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              Over the years, we have consistently adapted to the changing educational landscape while maintaining our 
              core values of integrity, excellence, and compassion.
            </p>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/school-building.jpg" 
              alt="School Building"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-last lg:order-first">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/classroom.jpg" 
                alt="Classroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
            <p className="text-gray-600 mb-4 text-lg">
              Our mission is to provide a nurturing environment that fosters intellectual curiosity, creativity, 
              and character development. We aim to empower students to become lifelong learners and responsible global citizens.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              Our vision is to be recognized as a premier educational institution that prepares students to meet 
              the challenges of a rapidly changing world while upholding traditional values.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">School Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sunita Sharma",
                role: "Principal",
                bio: "With over 25 years of experience in education, Dr. Sharma leads our school with vision and dedication.",
                image: "/principal.jpg"
              },
              {
                name: "Ramesh Patel",
                role: "Vice Principal",
                bio: "Mr. Patel oversees academic excellence and student development programs.",
                image: "/vice-principal.jpg"
              },
              {
                name: "Anita Gupta",
                role: "Head of Academics",
                bio: "Ms. Gupta ensures our curriculum remains innovative and effective.",
                image: "/academic-head.jpg"
              }
            ].map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="relative h-64">
                  <Image 
                    src={leader.image} 
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}