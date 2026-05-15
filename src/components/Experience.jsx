import { motion } from 'framer-motion';
import { IconBriefcase, IconSchool, IconMapPin, IconClock, IconExternalLink } from '@tabler/icons-react';
import { fadeInUp, staggerContainer, whileHover, whileTap } from '../styles/animations';
import config from '../data/config.json';
import styles from './Experience.module.css';

export default function Experience() {
  const { experience } = config;

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className={styles.label}>
            <IconBriefcase size={18} />
            My Journey
          </span>
          <h2 className={styles.title}>Experience & Education</h2>
          <p className={styles.subtitle}>
            Building expertise through internships, projects, and continuous learning
          </p>
        </motion.div>

        <motion.div
          className={styles.timeline}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              variants={fadeInUp}
            >
              <div className={styles.timelineIcon}>
                {index === 0 ? <IconBriefcase size={20} /> : <IconSchool size={20} />}
              </div>

              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div>
                    <h3 className={styles.jobTitle}>{item.title}</h3>
                    <p className={styles.company}>
                      {item.company}
                      <span className={styles.location}>
                        <IconMapPin size={14} />
                        {item.location}
                      </span>
                    </p>
                  </div>
                  <span className={styles.period}>
                    <IconClock size={14} />
                    {item.period}
                  </span>
                </div>

                <p className={styles.description}>{item.description}</p>

                <div className={styles.tags}>
                  <span className={styles.duration}>{item.duration}</span>
                  {item.marks && <span className={styles.marks}>{item.marks}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.certifications}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className={styles.certTitle}>Certifications</h3>
          <div className={styles.certList}>
            {config.certifications.map((cert, i) => {
              const isLink = cert.url && cert.url !== '#';
              const BadgeComponent = isLink ? motion.a : motion.div;

              return (
                <BadgeComponent
                  key={i}
                  {...(isLink ? {
                    href: cert.url,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  } : {})}
                  className={`${styles.certBadge} ${!isLink ? styles.noLink : ''}`}
                  whileHover={isLink ? whileHover : undefined}
                  whileTap={isLink ? whileTap : undefined}
                >
                  <div className={styles.certContent}>
                    <span className={styles.certName}>{cert.name}</span>
                    <span className={styles.certIssuer}>{cert.issuer}</span>
                  </div>
                  {isLink ? (
                    <IconExternalLink size={20} className={styles.certIcon} />
                  ) : (
                    <span className={styles.certYear}>{cert.year}</span>
                  )}
                </BadgeComponent>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
