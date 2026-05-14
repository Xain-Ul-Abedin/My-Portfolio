import { motion } from 'framer-motion';
import { IconDeviceGamepad, IconShieldCheck, IconSparkles } from '@tabler/icons-react';
import { fadeInUp, staggerContainer } from '../styles/animations';
import config from '../data/config.json';
import styles from './Skills.module.css';

const categoryIcons = {
  'Game Development': IconDeviceGamepad,
  'Design & Creative': IconSparkles,
  'Quality & Management': IconShieldCheck
};

export default function Skills() {
  const { skills } = config;

  return (
    <section className={styles.skills} id="skills">
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
            Skill Registry
          </span>
          <h2 className={styles.title}>Technical Proficiency</h2>
          <p className={styles.subtitle}>
            A structured breakdown of my game development, design, and management capabilities
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {skills.map((group, index) => {
            const Icon = categoryIcons[group.category] || IconSparkles;

            return (
              <motion.div
                key={index}
                className={styles.categoryCard}
                variants={fadeInUp}
              >
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>
                    <Icon size={24} />
                  </div>
                  <h3 className={styles.categoryTitle}>{group.category}</h3>
                </div>

                <div className={styles.skillList}>
                  {group.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      className={styles.skillItem}
                      whileHover={{ x: 5 }}
                    >
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}