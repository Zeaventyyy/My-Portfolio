import React from 'react';
import styles from './contact.module.css';

function Contact() {
  return (
    <div className={styles.contactMainContainer}>
      <div className={styles.contactContainer}>
        <section className={styles.contactSection}>
          <div className={styles.contactTitleContainer}>
            <p className={styles.contactTitle}>What&apos;s Next?</p>
            <p className={styles.line} />
          </div>

          <div className={styles.contactSubTitleContainer}>
            <p className={styles.contactSubTitle}>Get In Touch</p>

            <p className={styles.introduction}>
              If ever I got you interested through my portfolio. Whether you
              have some questions or you just want to say hi, My inbox is always
              open and I&apos;ll try my best to reply back to you.
            </p>
          </div>

          <div className={styles.buttonContainer}>
            <a
              className={`${styles.button} email-link`}
              href="mailto:zeavenjoverttemanalastas@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Say Hello
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
