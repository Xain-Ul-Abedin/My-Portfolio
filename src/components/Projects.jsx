import { motion } from 'framer-motion';
import { IconBrandGithub, IconExternalLink, IconDeviceGamepad, IconSword } from '@tabler/icons-react';
import { fadeInUp, staggerContainer, scaleIn, whileHover, whileTap } from '../styles/animations';
import config from '../data/config.json';
import styles from './Projects.module.css';

export default function Projects() {
  const { projects } = config;

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className={styles.label}>
            <IconDeviceGamepad size={18} />
            My Projects
          </span>
          <h2 className={styles.title}>Featured Game Projects</h2>
          <p className={styles.subtitle}>
            Small but meaningful projects that showcase my game development journey
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className={styles.card}
              variants={scaleIn}
              whileHover={whileHover}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
{project.engine.includes('Unity') ? (
                    <IconSword size={32} />
                  ) : (
                    <IconDeviceGamepad size={32} />
                  )}
                </div>
                <span className={styles.engine}>{project.engine}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                  whileHover={whileHover}
                  whileTap={whileTap}
                >
                  <IconBrandGithub size={18} />
                  Source Code
                </motion.a>
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtnSecondary}
                    whileHover={whileHover}
                    whileTap={whileTap}
                  >
                    <IconExternalLink size={18} />
                    Play Demo
                  </motion.a>
                )}
              </div>

              <div className={styles.statusBadge}>
                <span className={`${styles.status} ${styles[project.status.toLowerCase()]}`}>
                  {project.status}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className={styles.moreProjects}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p>More projects coming soon as I continue learning!</p>
          <motion.a
            href={config.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            whileHover={whileHover}
            whileTap={whileTap}
          >
            <IconBrandGithub size={20} />
            Check my GitHub for updates
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
