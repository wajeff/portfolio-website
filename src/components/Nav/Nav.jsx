import React, { useEffect, useState } from 'react';
import styles from './Nav.module.css';
import selfie from '../../../src/assets/Hero/selfie.jpg';

const sections = [
  { id: 'Intro', label: 'Intro' },
  { id: 'Work', label: 'Work' },
  { id: 'Values', label: 'Values' },
  { id: 'Contact', label: 'Contact' },
];

const Nav = () => {
  const [activeId, setActiveId] = useState('Intro');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveId(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__container}>
        <div className={styles.image__container}>
          <img
            src={selfie}
            alt="Selfie"
            className={styles.image}
          />
        </div>
        {sections.map((section) => (
          <li
          key={section.id}
          className={`${styles['nav__list-item']} ${activeId === section.id ? styles.active : ''}`}
          >
          <a href={`#${section.id}`}>{section.label}</a>
        </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
