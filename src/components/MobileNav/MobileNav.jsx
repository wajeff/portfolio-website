import { useState } from 'react';
import styles from './MobileNav.module.css';
import selfie from '/src/assets/Nav/selfie.jpg'
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`styles.mobilenav__fullpage`} 
    >
      <ul
      className={`${styles.mobilenav__list} 
      ${isOpen ? styles[`mobilenav__list-active`] : ''}`}
      >
        <li className ={styles.mobilenav__item}>
          Test
        </li>
      </ul>
    
      <section
        className={`${styles.mobilenav} 
        ${isOpen ? styles.active : ''}`}
      >
     
        <img className = {styles.mobilvenav__image}src={selfie}/>

        <section
        className={`${styles[`mobilenav__line-container`]}`}
        onClick={() => setIsOpen(prev => !prev)}
        >
          <span
            className={`${styles.mobilenav__line} ${
            isOpen ? styles[`line1Active`] : ''}
            }`}
          />
          <span
            className={`${styles.mobilenav__line} ${
            isOpen ? styles[`line2Active`] : ''}
            }`}
          />


        </section>
    
      </section>
    </nav>
  );
};

export default MobileNav;
