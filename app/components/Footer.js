"use client";
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Footer({ currentPage, setCurrentPage }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/logowhite.png" alt="Logo" className="h-12 w-auto mr-3" />
              <span className={`${pacifico.className} text-2xl font-bold`} style={{ color: '#faefdd' }}>
                Mithira Grace
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Creative UI/UX Designer passionate about crafting intuitive digital experiences. 
              Working through the night to bring wise ideas to light.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/mithira-grace-v-a08995281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:jmithiragrace.77@gmail.com"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#faefdd' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a onClick={() => handleNav('home')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => handleNav('projects')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Projects
                </a>
              </li>
              <li>
                <a onClick={() => handleNav('canva')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Canva
                </a>
              </li>
              <li>
                <a onClick={() => handleNav('resume')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Resume
                </a>
              </li>
              <li>
                <a onClick={() => handleNav('contact')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#faefdd' }}>Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">UI/UX Design</span>
              </li>
              <li>
                <span className="text-gray-300">Web Design</span>
              </li>
              <li>
                <span className="text-gray-300">Mobile Design</span>
              </li>
              <li>
                <span className="text-gray-300">Prototyping</span>
              </li>
              <li>
                <span className="text-gray-300">Branding</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#faefdd' }}>Get In Touch</h3>
              <div className="space-y-2">
                <p className="text-gray-300 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  jmithiragrace.77@gmail.com
                </p>
                <p className="text-gray-300 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Available Worldwide
                </p>
              </div>
            </div>

            {/*
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#faefdd' }}>Newsletter</h3>
              <p className="text-gray-300 mb-4">Stay updated with my latest projects and design insights.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-gray-500 text-white"
                />
                <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Mithira Grace. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute bottom-0 left-0 opacity-5">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor">
          <circle cx="100" cy="100" r="80" />
        </svg>
      </div>
    </footer>
  );
}
