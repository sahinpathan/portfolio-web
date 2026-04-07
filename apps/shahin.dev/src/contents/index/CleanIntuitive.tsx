// import Link from 'next/link';
import styles from '../../styles/CleanIntuitive.module.css';
//'../styles//HeroSection.module.css';

export default function CleanIntuitive() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          available for new projects
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNum}>
              7<span>+</span>
            </div>
            <div className={styles.statLabel}>Years exp</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>
              40<span>+</span>
            </div>
            <div className={styles.statLabel}>Projects</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>
              12<span>+</span>
            </div>
            <div className={styles.statLabel}>Clients</div>
          </div>
        </div>
      </div>

      {/* Terminal Card */}
      <div className={styles.right}>
        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
            <span className={styles.terminalTitle}>~/shahin — zsh</span>
          </div>
          <div className={styles.terminalBody}>
            <div className={styles.tLine}>
              <span className={styles.tPrompt}>❯</span>
              <span className={styles.tCmd}>cat developer.json</span>
            </div>
            <div className={styles.tSpacer} />
            <div className={styles.tLine}>
              <span className={styles.tBracket}>{'{'}</span>
            </div>
            <div className={`${styles.tLine} ${styles.tIndent}`}>
              <span className={styles.tKey}>"name"</span>
              <span className={styles.tBracket}>: </span>
              <span className={styles.tString}>"Shahin Pathan"</span>
              <span className={styles.tBracket}>,</span>
            </div>
            <div className={`${styles.tLine} ${styles.tIndent}`}>
              <span className={styles.tKey}>"role"</span>
              <span className={styles.tBracket}>: </span>
              <span className={styles.tString}>"Full-Stack Developer"</span>
              <span className={styles.tBracket}>,</span>
            </div>
            <div className={`${styles.tLine} ${styles.tIndent}`}>
              <span className={styles.tKey}>"experience"</span>
              <span className={styles.tBracket}>: </span>
              <span className={styles.tNum}>7</span>
              <span className={styles.tBracket}>,</span>
            </div>
            <div className={`${styles.tLine} ${styles.tIndent}`}>
              <span className={styles.tKey}>"stack"</span>
              <span className={styles.tBracket}>: [</span>
            </div>
            <div className={styles.tLine} style={{ paddingLeft: '40px' }}>
              <span className={styles.tString}>"React"</span>
              <span className={styles.tBracket}>, </span>
              <span className={styles.tString}>"Next.js"</span>
              <span className={styles.tBracket}>, </span>
              <span className={styles.tString}>"Node.js"</span>
              <span className={styles.tBracket}>,</span>
            </div>
            <div className={styles.tLine} style={{ paddingLeft: '40px' }}>
              <span className={styles.tString}>"TypeScript"</span>
              <span className={styles.tBracket}>, </span>
              <span className={styles.tString}>"PostgreSQL"</span>
            </div>
            <div className={`${styles.tLine} ${styles.tIndent}`}>
              <span className={styles.tBracket}>],</span>
            </div>
            <div className={`${styles.tLine} ${styles.tIndent}`}>
              <span className={styles.tKey}>"available"</span>
              <span className={styles.tBracket}>: </span>
              <span className={styles.tVal}>true</span>
            </div>
            <div className={styles.tLine}>
              <span className={styles.tBracket}>{'}'}</span>
            </div>
            <div className={styles.tSpacer} />
            <div className={styles.tLine}>
              <span className={styles.tPrompt}>❯</span>
              <span className={styles.tCursor} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
