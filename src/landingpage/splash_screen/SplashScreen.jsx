import React, { useState } from 'react';
import { ReactComponent as ZeavenLogo } from '../../icons/zeavenlogo.svg';
import styles from './splash_screen.module.css';

function SplashScreen() {
  const [isVisible, setVisibility] = useState(true);

  setTimeout(() => setVisibility(false), 4000);

  return (
    isVisible && (
      <div className={styles.splashScreen}>
        <ZeavenLogo className="animate-pulse w-28 h-28" />
      </div>
    )
  );
}

export default SplashScreen;
