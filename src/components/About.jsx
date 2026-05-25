import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconUser, IconMapPin, IconDeviceGamepad, IconPalette, IconShieldCheck } from '@tabler/icons-react';
import { fadeInUp, staggerContainer } from '../styles/animations';
import config from '../data/config.json';
import styles from './About.module.css';

export default function About() {
  const { about, personal } = config;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className={styles.imageSection} variants={fadeInUp}>
            <div className={styles.imageWrapper}>
              {about.image ? (
                <>
                  <div className={`${styles.imageLoader} ${imageLoaded ? styles.loaded : ''}`} />
                  <img 
                    src={`${import.meta.env.BASE_URL}${about.image}`} 
                    alt={personal.name} 
                    className={`${styles.image} ${imageLoaded ? styles.visible : styles.hidden}`} 
                    onLoad={() => setImageLoaded(true)}
                  />
                </>
              ) : (
                <div className={styles.imagePlaceholder}>
                  <IconUser size={64} />
                </div>
              )}
              <div className={styles.imageBorder} />
            </div>
          </motion.div>

          <motion.div className={styles.textSection} variants={fadeInUp}>
            <span className={styles.label}>
              <IconUser size={18} />
              About Me
            </span>
            <h2 className={styles.title}>Hello! I'm {personal.name}</h2>
            <p className={styles.bio}>{about.bio}</p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>
                  <IconShieldCheck size={24} />
                </div>
                <div className={styles.highlightText}>
                  <h4>SQA & PM Specialist</h4>
                  <p>Excelled in quality control and project workflows</p>
                </div>
              </div>

              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>
                  <IconDeviceGamepad size={24} />
                </div>
                <div className={styles.highlightText}>
                  <h4>Aspiring Game Developer</h4>
                  <p>Building a future in 2D/3D gaming experiences</p>
                </div>
              </div>

              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>
                  <IconPalette size={24} />
                </div>
                <div className={styles.highlightText}>
                  <h4>Self-Taught Designer</h4>
                  <p>Creative design through years of freelancing</p>
                </div>
              </div>
            </div>

            <div className={styles.location}>
              <IconMapPin size={18} />
              <span>{personal.location}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
