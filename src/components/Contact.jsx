import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconMail, IconBrandGithub, IconBrandDiscord, IconBrandLinkedin, IconDownload, IconSparkles } from '@tabler/icons-react';
import { fadeInUp, staggerContainer, slideInLeft, whileHover, whileTap } from '../styles/animations';
import { generateResume } from '../utils/generateResume';
import config from '../data/config.json';
import styles from './Contact.module.css';

export default function Contact() {
  const { personal } = config;
  const [isGenerating, setIsGenerating] = useState(false);

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
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className={styles.label}>
            <IconSparkles size={18} />
            Get In Touch
          </span>
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.subtitle}>
            Looking for summer internship opportunities in game development.
            I'm open to learn and contribute to exciting projects!
          </p>
        </motion.div>

        <motion.div
          className={styles.content}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div className={styles.info} variants={slideInLeft}>
            <div className={styles.contactCard}>
              <h3>Contact Information</h3>
              <p className={styles.introText}>
                Feel free to reach out to me through any of these channels.
                I typically respond within 24 hours.
              </p>

              <div className={styles.contactList}>
                <motion.a
                  href={`mailto:${personal.email}`}
                  className={styles.contactItem}
                  whileHover={whileHover}
                  whileTap={whileTap}
                >
                  <div className={styles.contactIcon}>
                    <IconMail size={22} />
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactValue}>{personal.email}</span>
                  </div>
                </motion.a>

                <motion.a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                  whileHover={whileHover}
                  whileTap={whileTap}
                >
                  <div className={styles.contactIcon}>
                    <IconBrandGithub size={22} />
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>GitHub</span>
                    <span className={styles.contactValue}>Xain-Ul-Abedin</span>
                  </div>
                </motion.a>

                <motion.a
                  href={`https://discord.com/users/${personal.discord}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                  whileHover={whileHover}
                  whileTap={whileTap}
                >
                  <div className={styles.contactIcon}>
                    <IconBrandDiscord size={22} />
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Discord</span>
                    <span className={styles.contactValue}>{personal.discord}</span>
                  </div>
                </motion.a>

                <motion.a
                  href={`https://${personal.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                  whileHover={whileHover}
                  whileTap={whileTap}
                >
                  <div className={styles.contactIcon}>
                    <IconBrandLinkedin size={22} />
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>LinkedIn</span>
                    <span className={styles.contactValue}>Zain-Ul-Abedin</span>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.resumeCard}
            variants={slideInLeft}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.resumeIcon}>
              <IconDownload size={32} />
            </div>
            <div className={styles.resumeContent}>
              <h3>Download Resume</h3>
              <p>
                Get a detailed overview of my skills, experience, and projects
                in a professionally formatted PDF document.
              </p>
            </div>
            <motion.button
              className={styles.downloadBtn}
              whileHover={isGenerating ? {} : whileHover}
              whileTap={isGenerating ? {} : whileTap}
              onClick={handleDownload}
              disabled={isGenerating}
              style={{ opacity: isGenerating ? 0.7 : 1, cursor: isGenerating ? 'wait' : 'pointer' }}
            >
              <IconDownload size={20} />
              {isGenerating ? 'Generating…' : 'Resume PDF'}
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.footer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p>Designed & Built by Zain-Ul-Abedin</p>
          <p className={styles.year}>2026</p>
        </motion.div>
      </div>
    </section>
  );
}
