import { useEffect, useState } from 'react';
import styles from './Landing.module.css';

const Landing = () =>{
    return (
        <div className={styles.landing}>
            <img className={styles.landing__image} src='../src/assets/Landing/name.gif'>
    
            </img>
            <h1 className={styles.landing__header}>Designer and Fullstack Developer</h1>
            
        </div>
        )
}
export default Landing;
/*const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return show ? (
    <div className={styles.landing}>
        <img className={styles.landing__image} src='../src/assets/Landing/name.gif'>

        </img>
    </div>
  ) : null; */