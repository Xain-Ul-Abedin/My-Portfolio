import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconHome, IconUser, IconDeviceGamepad, IconCode, IconBriefcase, IconMail, IconMenu, IconX, IconSun, IconMoon } from '@tabler/icons-react';
import { whileHover, whileTap } from '../styles/animations';
import styles from './Navigation.module.css';

const navLinks = [
  { href: '#home', label: 'Home', icon: IconHome },
  { href: '#about', label: 'About', icon: IconUser },
  { href: '#projects', label: 'Projects', icon: IconDeviceGamepad },
  { href: '#skills', label: 'Skills', icon: IconCode },
  { href: '#experience', label: 'Experience', icon: IconBriefcase },
  { href: '#contact', label: 'Contact', icon: IconMail },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // We intentionally do not hide overflow on mobile menu open 
    // to allow smooth scrolling to hash links.
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <motion.div 
        className={styles.container}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.a 
          href="#home" 
          className={styles.logo} 
          whileHover={whileHover} 
          whileTap={whileTap}
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <span className={styles.logoIcon}>
            <IconDeviceGamepad size={24} />
          </span>
          <span className={styles.logoText}>Zain</span>
        </motion.a>

        <div className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              whileHover={whileHover}
              whileTap={whileTap}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className={styles.rightControls}>
          <button className={styles.switchToggle} onClick={toggleTheme} aria-label="Toggle theme">
            <IconSun size={14} className={styles.switchIcon} />
            <IconMoon size={14} className={styles.switchIcon} />
            <div className={`${styles.switchThumb} ${theme === 'light' ? styles.light : styles.dark}`} />
          </button>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </motion.div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              <link.icon size={20} />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
