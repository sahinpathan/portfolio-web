import { useState } from 'react';
import styles from '../../styles/Projects.module.css';
const PROJECTS = [
  {
    num: '01',
    name: 'SaaS Dashboard Platform',
    desc: 'Multi-tenant analytics dashboard with real-time data, role-based access, and custom reporting.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    status: 'live' as const,
    href: '#',
  },
  {
    num: '02',
    name: 'E-Commerce API Engine',
    desc: 'High-performance REST API handling 10k+ req/min with Redis caching and payment integration.',
    tags: ['Node.js', 'Redis', 'AWS'],
    status: 'live' as const,
    href: '#',
  },
  {
    num: '03',
    name: 'Design System UI Kit',
    desc: 'Open-source component library with 60+ components, dark mode, and full TypeScript support.',
    tags: ['React', 'TypeScript', 'Storybook'],
    status: 'wip' as const,
    href: '#',
  },
  {
    num: '04',
    name: 'Real-time Collab Tool',
    desc: 'Notion-like collaborative editor with live cursors, conflict resolution, and offline support.',
    tags: ['WebSockets', 'CRDT', 'React'],
    status: 'live' as const,
    href: '#',
  },
];

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'npm' | 'github'>('github');

  return (
    <>
      <section className={styles.sectionNoTop}>
        <div className={styles.sectionTag}>selected work</div>
        <h2 className={styles.sectionTitle}>
          Things I've
          <br />
          <span className={styles.dim}>shipped.</span>
        </h2>
        <p className={styles.sectionSub}>
          A selection of projects from client work, open-source, and personal
          builds.
        </p>
        <div className={styles.projectsGrid}>
          {PROJECTS.map((p, i) => (
            <a
              key={p.num}
              href={p.href}
              className={`${styles.projectRow} ${i === 0 ? styles.first : ''} ${
                i === PROJECTS.length - 1 ? styles.last : ''
              }`}
            >
              <span className={styles.projectNum}>{p.num}</span>
              <div className={styles.projectInfo}>
                <div className={styles.projectName}>{p.name}</div>
                <div className={styles.projectDesc}>{p.desc}</div>
              </div>
              <div className={styles.projectTags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.projectTag}>
                    {t}
                  </span>
                ))}
              </div>
              <span
                className={`${styles.projectStatus} ${
                  p.status === 'live' ? styles.live : styles.wip
                }`}
              >
                {p.status}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectsContents;
