"use client";
import { useState } from 'react';
import { Pacifico } from 'next/font/google';

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

  return (
    <div className="bg-white w-full flex flex-col border-2">
      <div className="min-h-screen flex items-center justify-center pb-20 pt-9" style={{ backgroundColor: '#faefdd' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8 w-full text-center">
          <div className="text-center mb-8 md:mb-12">
            <h1 className={`${pacifico.className} text-4xl md:text-6xl font-bold mb-4 text-gray-800`}>Get In Touch</h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-2">
              Let's create something amazing together! Drop me a message and I'll get back to you soon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols gap-6 md:gap-12 text-center md:text-left">
            

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

              

              {/* Social Links */}
              <div className="backdrop-blur-lg bg-white/30 border-2 rounded-xl shadow-lg p-4 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">Follow Me</h2>
                <div className="flex space-x-3 md:space-x-4">
                  <a href="https://www.linkedin.com/in/mithira-grace-v-a08995281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="bg-gray-800 text-white p-2 md:p-3 rounded-lg hover:bg-gray-700 transition-colors">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
