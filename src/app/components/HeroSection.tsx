import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-blue-10 text-white py-20 md:py-32">
      <div className="absolute inset-0 opacity-100">
        <Image 
          src="/school-building.jpg" 
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to Maa Sharda Sr. Sec. Public School
          </h1>
          <p className="text-xl mb-8">
            Where excellence in education meets the nurturing of young minds for a brighter future.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/admissions" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Admissions
            </Link>
            <Link 
              href="/about" 
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection