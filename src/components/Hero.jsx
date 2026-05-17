import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconDeviceGamepad, IconDownload, IconBrandLinkedin } from '@tabler/icons-react';
import { fadeInUp, staggerContainer, whileHover, whileTap } from '../styles/animations';
import { generateResume } from '../utils/generateResume';
import config from '../data/config.json';
import styles from './Hero.module.css';
import avatarSrc from '../assets/Avatar.png';

export default function Hero() {
  const { personal } = config;
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleDownload = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      await generateResume();
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className={styles.badge} variants={fadeInUp}>
            <IconDeviceGamepad size={16} />
            <span>Available for Internship</span>
          </motion.div>

          <motion.h1 className={styles.name} variants={fadeInUp}>
            {personal.name}
          </motion.h1>

          <motion.p className={styles.tagline} variants={fadeInUp}>
            {personal.tagline}
          </motion.p>

          <motion.p className={styles.intro} variants={fadeInUp}>
            BS Software Engineering Student at PTUT Lahore. Passionate about creating
            immersive 2D gaming experiences and interactive design.
          </motion.p>

          <motion.div className={styles.actions} variants={fadeInUp}>
            <motion.a
              href="#projects"
              className={styles.primaryBtn}
              whileHover={whileHover}
              whileTap={whileTap}
            >
              View My Work
            </motion.a>
            <motion.button
              className={styles.secondaryBtn}
              onClick={handleDownload}
              whileHover={isGenerating ? {} : whileHover}
              whileTap={isGenerating ? {} : whileTap}
              disabled={isGenerating}
              style={{ opacity: isGenerating ? 0.7 : 1, cursor: isGenerating ? 'wait' : 'pointer' }}
            >
              <IconDownload size={18} />
              {isGenerating ? 'Generating…' : 'Download Resume'}
            </motion.button>
          </motion.div>

          <motion.div className={styles.socialLinks} variants={fadeInUp}>
            <motion.a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={whileHover}
              whileTap={whileTap}
              aria-label="GitHub Profile"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a
              href={personal.linkedin || '#'}
              target={personal.linkedin ? "_blank" : undefined}
              rel={personal.linkedin ? "noopener noreferrer" : undefined}
              className={styles.socialLink}
              whileHover={whileHover}
              whileTap={whileTap}
              aria-label="LinkedIn Profile"
            >
              <IconBrandLinkedin size={24} />
            </motion.a>
            <motion.a
              href={`https://discord.com/users/${personal.discord}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={whileHover}
              whileTap={whileTap}
              aria-label="Discord Profile"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </motion.a>
            <motion.a
              href={`mailto:${personal.email}`}
              className={styles.socialLink}
              whileHover={whileHover}
              whileTap={whileTap}
              aria-label="Email"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.decorative}
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
        >
          {/* Slow-spinning dashed outer ring */}
          <div className={styles.avatarRing} />

          {/* Glowing solid border */}
          <div className={styles.avatarBorder} />

          {/* Glow sweep skeleton loader */}
          <div className={`${styles.imageLoader} ${imageLoaded ? styles.loaded : ''}`} />

          {/* Avatar photo — floats up/down */}
          <img
            src={avatarSrc}
            alt="Zain Ul-Abedin"
            className={`${styles.avatarImg} ${imageLoaded ? styles.visible : styles.hidden}`}
            draggable={false}
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>
      </div>

      <div className={styles.scrollIndicator}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
