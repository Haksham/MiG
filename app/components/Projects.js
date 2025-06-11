"use client";
import { Pacifico } from 'next/font/google';
import { useState } from 'react';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Mahindra Brand Identity",
      description: "Complete brand identity redesign for Mahindra with modern UI elements and cohesive visual language.",
      image: "/mahendra2.jpg",
      link: "https://www.figma.com/design/vWHAEDuNj9wFVYyKk3MxNn/MAHINDRA?node-id=0-1&t=WrIVMl4uCNhzXquV-1",
      category: "Brand Design",
      tools: ["Figma", "Adobe Illustrator"],
      year: "2024"
    },
    {
      id: 2,
      title: "Ratan Tata Tribute",
      description: "A tribute design project celebrating the legacy of Ratan Tata with elegant typography and visual storytelling.",
      image: "/tata2.jpg",
      link: "https://www.figma.com/design/nQAk46VsRZjCc21V5b9OXv/RATAN-TATA?node-id=0-1&t=xdQhP9a4xIj88bIP-1",
      category: "Digital Design",
      tools: ["Figma", "Photoshop"],
      year: "2024"
    },
    {
      id: 3,
      title: "Magazine Layout Design",
      description: "Editorial design for a digital magazine featuring clean layouts, typography hierarchy, and engaging visuals.",
      image: "/magazine2.jpg",
      link: "https://www.figma.com/design/UHk9bHIl3TMVO9FdQt98je/Magazine-2nd-edition-?node-id=229-589&t=9qrU4KLIrX3JDg8n-1",
      category: "Editorial Design",
      tools: ["Figma", "InDesign"],
      year: "2024"
    },
    {
      id: 4,
      title: "Dream11 App Redesign",
      description: "Mobile app UI/UX redesign focusing on improved user experience and modern interface design.",
      image: "/dream112.jpg",
      link: "https://www.figma.com/design/pBg7YUSqZz2wJI8toz2Oqd/DREAM-11?node-id=0-1&t=xNODNZfFdvGQWoDJ-1",
      category: "Mobile App",
      tools: ["Figma", "Sketch"],
      year: "2024"
    },
    {
      id: 5,
      title: "Persist Ventures Website",
      description: "Corporate website design with interactive prototypes and responsive layouts for a venture capital firm.",
      image: "/mob.jpg",
      link: "https://www.figma.com/proto/j0NxvnXRQFV1d6PGr8ODhf/PERSIST-VENTURES?page-id=0%3A1&node-id=9-2&starting-point-node-id=9%3A2&t=8nMxJeZMbVXxsJ7j-1",
      category: "Web Design",
      tools: ["Figma", "Webflow"],
      year: "2024"
    },
    {
      id: 6,
      title: "Ice Cream Brand Design",
      description: "Fun and colorful brand identity for an ice cream company with playful illustrations and packaging design.",
      image: "/ice.jpg",
      link: "https://www.figma.com/design/0mgM0IouXCkPxPZvZRmLkr/ICE-CREAM-DUPLICATE?node-id=0-1&t=rnvOvCl5ZT7bdZUi-1",
      category: "Brand Design",
      tools: ["Figma", "Illustrator"],
      year: "2024"
    }
  ];

  const categories = ["All", "Brand Design", "Web Design", "Mobile App", "Editorial Design", "Digital Design"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useState(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="bg-white w-full flex flex-col border-2">
      <div className="min-h-screen py-10" style={{ backgroundColor: '#faefdd' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className={`${pacifico.className} text-5xl md:text-6xl font-bold mb-4 text-gray-800`}>
              My Projects
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              A showcase of my design work across various disciplines - from brand identity and web design 
              to mobile apps and digital experiences.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category
                    ? 'bg-gray-800 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 px-6 py-2 rounded-full font-medium transform translate-y-4 hover:translate-y-0"
                    >
                      View Project
                    </a>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tools Used */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Project Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">{projects.length}+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">5+</div>
              <div className="text-gray-600">Design Categories</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">2024</div>
              <div className="text-gray-600">Latest Work</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Like what you see?
              </h2>
              <p className="text-gray-600 mb-6">
                I'm always excited to work on new projects and bring creative ideas to life. 
                Let's collaborate and create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}