import { useEffect, useState } from 'react';
import styles from './Landing.module.css';
import name from '/src/assets/Landing/name.gif'

const Landing = () =>{
    return (
        <div className={styles.landing}>
            <img className={styles.landing__image} src={name}>
    
            </img>
            <h1 className={styles.landing__header}>Designer and Fullstack Developer</h1>
            
        </div>
        )
}
export default Landing;
