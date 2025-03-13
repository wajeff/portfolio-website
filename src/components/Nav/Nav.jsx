import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className = {styles.nav}>
        
        <ul className = {styles.nav__container}>
        <div className = {styles.image__container}>
          <img
              src="../../public/assets/Hero/selfie.jpg"
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