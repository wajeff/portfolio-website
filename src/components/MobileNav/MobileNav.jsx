import { useState } from 'react';
import styles from './MobileNav.module.css';
import selfie from '/src/assets/Hero/selfie.jpg'
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${styles.mobilenav} ${isOpen ? styles.active : ''}`}
      onClick={() => setIsOpen(prev => !prev)}
    >
    
    <img className = {styles.mobilvenav__image}src={selfie}/>

    <section className={styles[`mobilenav__line-container`]}>

    <span
      className={`${styles.mobilenav__line} ${
      isOpen ? styles.line1Active : ''
      }`}
    />
    <span
      className={`${styles.mobilenav__line} ${
      isOpen ? styles.line2Active : ''
    }`}
    />


    </section>
    
  </nav>
  );
};

export default MobileNav;
