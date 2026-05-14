import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconHome, IconUser, IconDeviceGamepad, IconCode, IconBriefcase, IconMail, IconMenu, IconX } from '@tabler/icons-react';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <motion.div 
        className={styles.container}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.a href="#home" className={styles.logo} whileHover={whileHover} whileTap={whileTap}>
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
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <motion.button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={whileHover}
          whileTap={whileTap}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={handleNavClick}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={whileHover}
                whileTap={whileTap}
              >
                <link.icon size={20} />
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
