import styles from './Hero.module.css'
const Hero = () => {
  return (
    <section className = {styles.hero}>
       <ul className = {styles['hero__list']}>
        <li className={styles['hero__list-item']}>For Anyone</li>
        <li className={styles['hero__list-item']}>Recruiters</li>
        <li className={styles['hero__list-item']}>Engineers</li>

       </ul>
       <h1 className = {styles.hero__paragraph}>Hello there, I’m a designer and full-stack developer who cares about making aesthetic and functional tech.</h1>
  
    </section>
  )
}

export default Hero