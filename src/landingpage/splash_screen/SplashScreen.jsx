import React, { useState } from 'react';
import { ReactComponent as ZeavenLogo } from '../../icons/zeavenlogo.svg';

function SplashScreen() {
  const [isVisible, setVisibility] = useState(true);

  setTimeout(() => setVisibility(false), 3000);

  return (
    isVisible && (
      <div className="splash-screen bg-amber-500 h-screen flex items-center justify-center fixed top-0 right-0 left-0 bottom-0 z-10 ">
        <ZeavenLogo className="animate-spin" />
        <ZeavenLogo className="animate-spin" />
      </div>
    )
  );
}

export default SplashScreen;
