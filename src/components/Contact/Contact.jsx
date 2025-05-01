import styles from './Contact.module.css'
import linkedin from '/src/assets/Contact/linkedin.png'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.contact__title}>Contact.</h2>
      
      <div className = {styles[`contact__container`]}>
      <p className={styles.contact__paragraph}> <div className={styles[`contact__container-look`]}>
          <div className = {styles[`contact__circle-animation`]}></div>
          <div className ={styles[`contact__circle-dot`]}></div>
        </div>I am currently exploring new positions.</p>
        <div className = {styles[`contact__image-container`]}><img alt = 'LinkedIn logo' src={linkedin}></img></div>
      </div>
     
    </section>
  )
}

export default Contact