import React from 'react';
import { ReactComponent as ZeavenLogo } from '../../icons/zeavenlogo.svg';
import styles from './about.module.css';

function About() {
  return (
    <div className={styles.aboutMainContainer}>
      <div className={styles.aboutContainer}>
        <section className={styles.aboutSection}>
          <div className={styles.aboutTitleContainer}>
            <span className={styles.aboutTitle}>About Me</span>
            <span className={styles.line} />
          </div>

          <p className={`${styles.introduction} pb-3`}>
            Greetings! I&apos;m Zeaven Jovertte Manalastas, and I find joy in
            both creating and deconstructing digital entities on the internet.
            My voyage through web development and quality assurance began in
            2019 during my internship. While I briefly diverted to explore
            Android development for a year and five months, my heart always
            gravitated towards the dynamic world of web development.
          </p>

          <p className={styles.introduction}>
            Fast-forward to today, I&apos;ve been diligently exploring front-end
            frameworks, libraries, and quality assurance tools and technologies,
            eager to incorporate them into my upcoming projects and endeavors.
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
