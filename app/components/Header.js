export default function Header() {
  return (
    <header className=" top-0 left-0 right-0 z-50 shadow-md" style={{ backgroundColor: '#292420', color: '#faefdd ' }}>
      <div className="container mx-auto md:px-6 py-4 flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img 
            src="/logowhite.png" 
            alt="Logo" 
            className="h-12 w-auto absolute"
          />
        </div>
        
        {/* Navigation on the right */}
        <nav className="flex items-center md:space-x-8 space-x-4 mr-3 italic">
          <a 
            href="#home" 
            className="hover:font-bold hover:underline transition-colors duration-200 font-medium"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="hover:font-bold hover:underline transition-colors duration-200 font-medium"
          >
            About
          </a>
          <a 
            href="/resume" 
            className="hover:font-bold hover:underline transition-colors duration-200 font-medium"
          >
            Resume
          </a>
          <a 
            href="#contact" 
            className="hover:font-bold hover:underline transition-colors duration-200 font-medium"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
