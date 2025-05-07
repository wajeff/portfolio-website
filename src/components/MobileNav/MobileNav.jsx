import { useState, useEffect } from 'react';
import styles from './MobileNav.module.css';
import selfie from '/src/assets/Nav/selfie.jpg'


const sections = [
  { id: 'Intro', label: 'Intro' },
  { id: 'Work', label: 'Work' },
  { id: 'Values', label: 'Values' },
  { id: 'Contact', label: 'Contact' },
];


const MobileNav = () => {
  const [activeId, setActiveId] = useState('Intro');
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      let currentSectionId = 'Intro';
  
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSectionId = section.id;
            break;
          }
        }
      }
  
      setActiveId(currentSectionId);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
    >
      <input type="checkbox" id="nav-toggle" className={styles.mobilenav__checkbox} checked={isOpen} />
      <ul
      className={`${styles.mobilenav__list} 
      ${isOpen ? styles[`mobilenav__list-active`] : ''}`}
      
      >
        
        {sections.map((section) => (
          <li
            key={section.id}
            className={`${styles['mobilenav__item']} ${activeId === section.id ? styles.active : ''}`}
            
          >
            <a 
            href={`#${section.id}`}
            onClick={() => setIsOpen(false)}
            >
              {section.label}
            </a>
          </li>
        ))}
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
          <label
            htmlFor="nav-toggle"
            className={`${styles.mobilenav__line} ${
            isOpen ? styles[`line1Active`] : ''}
            }`}
          />
          <label
            htmlFor="nav-toggle"
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
