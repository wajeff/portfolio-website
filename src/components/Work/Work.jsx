import styles from './Work.module.css'

function Work() {
  return (
    <section className = {styles.work}>
        <h2 className = {styles.work__title}>Work.</h2>
        <section className = {styles.work__container}>
            <section className={styles["work__works-left"]}>
                <img 
                    className = {styles["work__works-image"]}
                    src='../../src/assets/Work/humanity-in-music.png'
                />
                <section className = {styles["work__works-description"]}>
                    <h3 className = {styles["work__works-title"]}>Humanity in Music</h3>
                    <p className = {["styles.work__works-paragraph"]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid aut voluptas cumque itaque expedita, esse natus nostrum iste dolorem enim cupiditate dignissimos dolorum velit voluptatum error incidunt harum? Temporibus.
                    </p>    
                </section>
                
            </section>
            <section className={styles["work__works-right"]}>
                
            </section>
            <section className={styles["work__works-left"]}>
                
            </section>
        </section>
    </section>
  )
}

export default Work
