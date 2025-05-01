import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.contact__title}>Contact</h2>
      
      <div className = {styles[`contact__container`]}>
      <h3 className={styles.contact__paragraph}> <div className={styles[`contact__container-look`]}>
          <div className = {styles[`contact__circle-animation`]}></div>
          <div className ={styles[`contact__circle-dot`]}></div>
        </div>I am currently exploring new positions.</h3>
        
        <div className={styles.contact__status}>
        
        </div>
      </div>
      

    </section>
  )
}

export default Contact