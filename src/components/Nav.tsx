import React, { useState, useEffect } from 'react';

const Nav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'work', 'education', 'skills', 'projects', 'contact'];
    const offsets = sections.map(section => {
      const element = document.getElementById(section);
      return element ? element.offsetTop : 0;
    });

    const scrollPosition = window.scrollY + 100; // Adjust this value based on your nav height

    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPosition >= offsets[i]) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">Affan</a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`}>Home</a>
            </li>
            <li className="nav__item">
              <a href="#about" className={`nav__link ${activeSection === 'about' ? 'active-link' : ''}`}>About</a>
            </li>
            <li className="nav__item">
              <a href="#work" className={`nav__link ${activeSection === 'work' ? 'active-link' : ''}`}>Work</a>
            </li>
            <li className="nav__item">
              <a href="#education" className={`nav__link ${activeSection === 'education' ? 'active-link' : ''}`}>Education</a>
            </li>
            <li className="nav__item">
              <a href="#skills" className={`nav__link ${activeSection === 'skills' ? 'active-link' : ''}`}>Skills</a>
            </li>
            <li className="nav__item">
              <a href="#projects" className={`nav__link ${activeSection === 'projects' ? 'active-link' : ''}`}>Project</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className={`nav__link ${activeSection === 'contact' ? 'active-link' : ''}`}>Contact</a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
