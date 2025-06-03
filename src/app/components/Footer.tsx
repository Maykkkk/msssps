import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Maa Sharda School</h3>
            <p className="mb-4">
              Providing quality education since years. Our mission is to nurture young minds and prepare them for the future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200 transition duration-300">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition duration-300">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition duration-300">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-200 transition duration-300">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-blue-200 transition duration-300">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-blue-200 transition duration-300">Admissions</Link></li>
              <li><Link href="/contact" className="hover:text-blue-200 transition duration-300">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>123 School Road, City, State 123456</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <span>info@maashardaschool.edu</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-400 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Maa Sharda Sr. Sec. Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer