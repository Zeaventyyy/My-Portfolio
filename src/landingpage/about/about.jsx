import React from 'react';
import { ReactComponent as ZeavenLogo } from '../../icons/zeavenlogo.svg';
import styles from './about.module.css';

function About() {
  return (
    <div className={styles.aboutMainContainer}>
      <div className={styles.aboutContainer}>
        <section className={styles.aboutSection}>
          <div className={styles.aboutTitleContainer}>
            <span className={styles.aboutLabel}>About Me</span>
            <span className={styles.line} />
          </div>

          <p className={`${styles.introduction} pb-3`}>
            Hello! I&apos;m Zeaven Jovertte Manalastas and I enjoy building
            things that live on the internet. My web development journey started
            way back 2019 when I was an intern. I stopped for the meantime and
            become an android developer for a year and a 5 months.
          </p>

          <p className={styles.introduction}>
            Fast-forward to today, I&apos;ve been studying front end frameworks
            and libraries to use them on my future projects and works.
          </p>
        </section>

        <section className={styles.aboutLogoSection}>
          <ZeavenLogo className={styles.logo} />
        </section>
      </div>
    </div>
  );
}
export default About;
