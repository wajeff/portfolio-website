import styles from './Contact.module.css'
import linkedin from '/src/assets/Contact/linkedin.png'
import github from '/src/assets/Contact/github.png'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.contact__title}>Contact.</h2>
      
      <div className = {styles[`contact__container`]}>
      <p className={styles.contact__paragraph}> <div className={styles[`contact__container-look`]}>
          <div className = {styles[`contact__circle-animation`]}></div>
          <div className ={styles[`contact__circle-dot`]}></div>
        </div>I am currently exploring new positions.</p>
      </div>
      <div className = {styles[`contact__images-container`]}>
        <a href='https://www.linkedin.com/in/wajeff/' rel="noopener noreferrer">
          <div className = {styles[`contact__image-container`]}><img alt = 'LinkedIn logo, link to my LinkedIn' src={linkedin}></img></div>
        </a>
        <a href='https://www.github.com/wajeff/' rel="noopener noreferrer"> <div className = {styles[`contact__image-container`]}><img alt = 'Github logo, link to my Github' src={github}></img></div></a>
      </div>
     
    </section>
  )
}

export default Contact