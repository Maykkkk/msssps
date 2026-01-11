import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="relative bg-[#020617] text-white py-20 md:py-32"> 
      {/* Background Image with lower opacity */}
      <div className="absolute inset-0">
        <Image 
          src="/school-building.jpg"
          alt="School Campus Background"
          fill
          className="object-cover object-[50%_20%] opacity-10" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#38bdf8]">
            Welcome to Maa Sharda Sr. Sec. Public School
          </h1>

          <p className="text-xl mb-8 text-gray-300">
            Where excellence in education meets the nurturing of young minds 
            for a brighter future.
          </p>

          <div className="flex space-x-4">
            <Link 
              href="/admissions"
              className="bg-[#38bdf8] text-black px-6 py-3 rounded-lg font-semibold 
              hover:bg-[#0ea5e9] transition duration-300"
            >
              Admissions
            </Link>

            <Link 
              href="/about"
              className="border-2 border-[#38bdf8] px-6 py-3 rounded-lg font-semibold 
              hover:bg-[#38bdf8] hover:text-black transition duration-300"
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
