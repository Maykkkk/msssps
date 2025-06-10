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
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Centered in the navbar */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link href="/" className="flex items-center">
              <div className="h-20 w-60 relative">
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
          
          {/* Desktop Navigation - Centered with equal spacing */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className="px-2 py-1 text-lg font-bold hover:text-white transition duration-300 relative group"
                >
                  {link.name}
                  {/* Underline effect on hover */}
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button - Aligned to the right */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md focus:outline-none text-gray-800 hover:text-white hover:bg-[#92b9e0] transition duration-300"
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
        <div className="md:hidden bg-[#A8CFF5] shadow-xl">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block px-4 py-3 rounded-lg text-lg font-bold hover:bg-[#92b9e0] hover:text-white transition duration-300"
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