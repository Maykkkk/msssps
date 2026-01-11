'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Alumni', path: '/alumni' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <nav className="bg-[#A8CFF5] text-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo - Responsive sizing */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-16 sm:h-20 w-36 sm:w-56 lg:w-60 relative">
                <Image 
                  src="/final_logo.png" 
                  alt="Maa Sharda School Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation - Full nav only on large screens */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-2">
            <div className="flex gap-2 xl:gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className="px-2 py-1 text-sm lg:text-base xl:text-lg font-bold hover:text-white transition duration-300 relative group whitespace-nowrap"
                >
                  {link.name}
                  {/* Underline effect on hover */}
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button - Shows on medium and below */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 sm:p-3 rounded-md focus:outline-none text-gray-800 hover:text-white hover:bg-[#92b9e0] transition duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation - Full width dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#A8CFF5] shadow-xl border-t border-blue-300">
          <div className="px-3 sm:px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-bold hover:bg-[#92b9e0] hover:text-white transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar