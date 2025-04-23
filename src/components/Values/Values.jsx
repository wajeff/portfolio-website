import React from 'react'
import styles from './Values.module.css'

const Values = () => {
  return (
    <section className={styles.values} id ='Values'>
          <h2 className={styles.values__title}>Values:</h2>
          <h2 className={styles.values__title}>Simple.</h2>
          <h2 className={styles.values__title}>Intuitive.</h2>
          <h2 className={styles.values__title}>Useful.</h2>
        <section className={styles[`values__paragraph-container--right`]}>
          <p className={styles[`values__paragraph-quote`]}>
            "Leave good evidence of yourself. Do good work."
            <span className={styles.values__lineBreak}></span>
            - Cal Newport
          </p>
          <p className={styles[`values__paragraph`]}>
            
            Creating a product or personal project that is bloat-free, easy to pick up, and helpful are principles I embody in all my work. Cooperating with various teams to create something better than any single individual would achieve otherwise makes this work all the more enjoyable. Personal revision, improving myself to be a better student of others is one of the greatest joys for me - not just in my work. Building, reviewing and using a well crafted and aesthetically pleasing product creates a sense of personal harmony for me. I wish to perpetuate this calming emotion to others through the work I produce.
          </p>
        </section>
        <section className={styles[`values__paragraph-container--left`]}>
          <p className={styles[`values__paragraph`]}>
          The average user closes a slow performing and otherwise poorly designed website between 3 to 20 seconds of landing. My work is to capture and retain those invaluable microns of time. These split moments determine if the user becomes a client or not. In the long run, these moments determine if they are retained as clients or leave. I believe that users will notice even small inconsistencies, bugs, and unintuitive design choices. At a time when our lives are encapsulated with our digital interfaces, the need for affordances and painlessly obvious design cannot be understated. This goes doubly for software developers and designers. Writing readable, scalable code that aligns with team conventions is essential to maintaining a sustainable and healthy codebase.
          </p>
        </section>
        
    </section>
  )
}

export default Values