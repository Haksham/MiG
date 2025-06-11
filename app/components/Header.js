export default function Header({ currentPage, setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <header className="top-0 left-0 right-0 z-50 shadow-md" style={{ backgroundColor: '#292420', color: '#faefdd' }}>
      <div className="container mx-auto md:px-6 py-4 flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img 
            src="/logowhite.png" 
            alt="Logo" 
            className="h-12 w-auto absolute cursor-pointer"
            onClick={() => handleNavClick('home')}
          />
        </div>
        
        {/* Navigation on the right */}
        <nav className="flex items-center md:space-x-8 space-x-2 mr-3 italic">
          <a 
            onClick={() => handleNavClick('home')}
            className={`hover:font-bold hover:underline transition-colors duration-200 font-medium cursor-pointer ${currentPage === 'home' ? 'font-bold underline' : ''}`}
          >
            Home
          </a>
          <a 
            onClick={() => handleNavClick('projects')}
            className={`hover:font-bold hover:underline transition-colors duration-200 font-medium cursor-pointer ${currentPage === 'projects' ? 'font-bold underline' : ''}`}
          >
            Projects
          </a>
          <a 
            onClick={() => handleNavClick('resume')}
            className={`hover:font-bold hover:underline transition-colors duration-200 font-medium cursor-pointer ${currentPage === 'resume' ? 'font-bold underline' : ''}`}
          >
            Resume
          </a>
          <a 
            onClick={() => handleNavClick('contact')}
            className={`hover:font-bold hover:underline transition-colors duration-200 font-medium cursor-pointer ${currentPage === 'contact' ? 'font-bold underline' : ''}`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
