"use client";
import { useState } from 'react';
import { Pacifico } from 'next/font/google';
import Footer from './Footer';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (<>
    <div className="bg-white w-full flex flex-col border-2">
      <div className="min-h-screen flex items-center justify-center pb-20 pt-9" style={{ backgroundColor: '#faefdd' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8 w-full">
          <div className="text-center mb-8 md:mb-12">
            <h1 className={`${pacifico.className} text-4xl md:text-6xl font-bold mb-4 text-gray-800`}>Get In Touch</h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-2">
              Let's create something amazing together! Drop me a message and I'll get back to you soon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/30 rounded-xl border-2 shadow-lg p-4 md:p-8 w-full">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all resize-none text-sm md:text-base"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium text-sm md:text-base"
                >
                  Send Message ➤
                </button>
              </form>
            </div>

            {/* Contact Info & Slack */}
            <div className="space-y-6 md:space-y-8">
              <div className="backdrop-blur-lg bg-white/30 border-2 rounded-xl shadow-lg p-4 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Contact Information</h2>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center">
                    <div className="bg-gray-800 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-gray-800 text-sm md:text-base">Email</p>
                      <p className="text-gray-600 text-xs md:text-sm break-all">jmithiragrace.77@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-gray-800 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm md:text-base">Location</p>
                      <p className="text-gray-600 text-xs md:text-sm">Available Worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-gray-800 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm md:text-base">Response Time</p>
                      <p className="text-gray-600 text-xs md:text-sm">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slack Button */}
              <div className="backdrop-blur-lg bg-white/30 border-2 rounded-xl shadow-lg p-4 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">Quick Connect</h2>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  For immediate discussions and quick questions, connect with me on Slack!
                </p>
                <a
                  href="https://slack.com/your-slack-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-purple-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300 font-medium text-sm md:text-base"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52-2.523A2.528 2.528 0 0 1 5.042 10.12h2.52v2.522a2.528 2.528 0 0 1-2.52 2.523Zm6.313-4.165h-2.52a2.528 2.528 0 0 1-2.52-2.523 2.528 2.528 0 0 1 2.52-2.523h2.52v5.046Z"/>
                    <path d="M8.315 18.477a2.528 2.528 0 0 1-2.52-2.523v-2.523h2.52a2.528 2.528 0 0 1 2.52 2.523 2.528 2.528 0 0 1-2.52 2.523Zm4.165-6.313v2.523a2.528 2.528 0 0 1-2.523 2.523 2.528 2.528 0 0 1-2.523-2.523v-2.523h5.046Z"/>
                    <path d="M18.477 8.315a2.528 2.528 0 0 1-2.523-2.52A2.528 2.528 0 0 1 18.477 3.27a2.528 2.528 0 0 1 2.523 2.524 2.528 2.528 0 0 1-2.523 2.521Zm-6.313 4.165h2.523a2.528 2.528 0 0 1 2.523 2.523 2.528 2.528 0 0 1-2.523 2.523h-2.523V12.48Z"/>
                    <path d="M15.835 18.477a2.528 2.528 0 0 1-2.523-2.523V13.431a2.528 2.528 0 0 1 2.523-2.523 2.528 2.528 0 0 1 2.523 2.523v2.523a2.528 2.528 0 0 1-2.523 2.523Z"/>
                    <path d="M12.164 8.315v-2.52a2.528 2.528 0 0 1 2.523-2.52 2.528 2.528 0 0 1 2.523 2.52v2.52h-5.046Z"/>
                  </svg>
                  Slack It!
                </a>
              </div>

              {/* Social Links */}
              <div className="backdrop-blur-lg bg-white/30 border-2 rounded-xl shadow-lg p-4 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">Follow Me</h2>
                <div className="flex space-x-3 md:space-x-4">
                  <a href="https://www.linkedin.com/in/mithira-grace-v-a08995281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="bg-gray-800 text-white p-2 md:p-3 rounded-lg hover:bg-gray-700 transition-colors">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" target='_blank' className="bg-gray-800 text-white p-2 md:p-3 rounded-lg hover:bg-gray-700 transition-colors">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                  <a href="#" target='_blank' className="bg-gray-800 text-white p-2 md:p-3 rounded-lg hover:bg-gray-700 transition-colors">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}