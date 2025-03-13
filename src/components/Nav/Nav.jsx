import styles from './Nav.module.css'
import selfie from '../../../src/assets/Hero/selfie.jpg'
const Nav = () => {
  return (
    <nav className = {styles.nav}>
        
        <ul className = {styles.nav__container}>
        <div className = {styles.image__container}>
          <img
              src={selfie}
              className = {styles.image}>

          </img>
        </div>
            <li className = {`${styles['nav__list-item']}`}>Intro</li>
            <li className = {`${styles['nav__list-item']}`}>Work</li>
            <li className = {`${styles['nav__list-item']}`}>Values</li>
            <li className = {`${styles['nav__list-item']}`}>Background</li>
            <li className = {`${styles['nav__list-item']}`}>Contact</li>
        </ul>
    </nav>
  )
}

export default Nav