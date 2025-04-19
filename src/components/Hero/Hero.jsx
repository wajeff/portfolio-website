import { useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const listItems = [
    {
      id: 'anyone',
      label: 'For Anyone',
      heading: "Hello there, I’m a designer and full-stack developer who cares about making aesthetic and functional tech."
    },
    {
      id: 'recruiters',
      label: 'Recruiters',
      heading: "I am a software developer with extensive experience in client-facing positions. I am open to new roles."
    },
    {
      id: 'engineers',
      label: 'Engineers',
      heading: "Let's build scalable, clean, and well-designed apps — together."
    }
  ];

  const [activeId, setActiveId] = useState('anyone');
  const activeItem = listItems.find(item => item.id === activeId);

  return (
    <section className={styles.hero} id="Intro">
      <ul className={styles.hero__list}>
        {listItems.map(item => (
          <li
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`${styles['hero__list-item']} ${activeId === item.id ? styles.active : styles.inactive}`}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <h1 className={styles.hero__header}>
        {activeItem.heading}
      </h1>
    </section>
  );
};

export default Hero;
