import React from 'react'
import styles from './Values.module.css'

const Values = () => {
  return (
    <section className={styles.values} id ='Values'>
        <section className={styles[`values__title-container`]}>
          <h2 className={styles.values__title}>Values:</h2>
          <h2 className={styles.values__title}>Minimalist.</h2>
          <h2 className={styles.values__title}>Intuitive.</h2>
          <h2 className={styles.values__title}>Useful.</h2>
        </section>
        
        <section className={styles[`values__paragraph-container--right`]}>
          <section className={styles[`values__paragraph`]}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aperiam cum, ullam alias veniam accusantium, impedit debitis eveniet facere deserunt earum? Neque ratione aliquid nobis commodi doloribus vero id recusandae!</p>
          </section>
        </section>
        <section className={styles[`values__paragraph-container--left`]}>
          <section className={styles[`values__paragraph`]}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aperiam cum, ullam alias veniam accusantium, impedit debitis eveniet facere deserunt earum? Neque ratione aliquid nobis commodi doloribus vero id recusandae!</p>
          </section>
        </section>
        
    </section>
  )
}

export default Values