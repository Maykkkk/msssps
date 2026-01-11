import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">Maa Sharda School</h3>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
              Providing quality education since years. Our mission is to nurture young minds and prepare them for the future.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="hover:text-blue-200 transition duration-300">
                <FaFacebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition duration-300">
                <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition duration-300">
                <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link href="/about" className="text-sm sm:text-base hover:text-blue-200 transition duration-300">About Us</Link></li>
              <li><Link href="/academics" className="text-sm sm:text-base hover:text-blue-200 transition duration-300">Academics</Link></li>
              <li><Link href="/admissions" className="text-sm sm:text-base hover:text-blue-200 transition duration-300">Admissions</Link></li>
              <li><Link href="/contact" className="text-sm sm:text-base hover:text-blue-200 transition duration-300">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">Contact Info</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-2">
                <FaMapMarkerAlt className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base break-words">123 School Road, City, State 123456</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-2">
                <FaPhone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">+91 1234567890</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-2">
                <FaEnvelope className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base break-words">info@maashardaschool.edu</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-400 mt-6 sm:mt-8 lg:mt-8 pt-6 sm:pt-8 lg:pt-8 text-center">
          <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} Maa Sharda Sr. Sec. Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer