import { useState } from 'react';
import './style.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          <div className="logo-icon">
            <div className="logo-part logo-part-1"></div>
            <div className="logo-part logo-part-2"></div>
            <div className="logo-part logo-part-3"></div>
            <div className="logo-part logo-part-4"></div>
          </div>
          <span>VideoCreation</span>
        </a>
        
        <div className={`menu-items ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" className="menu-item">About Us</a>
          <a href="#packages" className="menu-item">Packages</a>
          <a href="#testimonials" className="menu-item">Testimonials</a>
          <a href="#contact" className="contact-btn">CONTACT</a>
        </div>
        
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 