import styles from './Work.module.css'
import humanityinmusic from '/src/assets/Work/humanity-in-music.png'
import candor from '/src/assets/Work/candor.png'
import heang from '/src/assets/Work/hair.jpg'
function Work() {
  return (
    <section className = {styles.work} id ='Work'>
        <h2 className = {styles.work__title}>Work.</h2>
        <section className = {styles.work__container}>
            {/*First Section */}

            <section className={styles["work__works"]}>
                <img 
                    className = {styles["work__works-image"]}
                    src={humanityinmusic}
                    alt = 'Man listening to music - Humanity in Music'
                />
                <section className = {styles["work__works-description"]}>
                    <h3 className = {styles["work__works-title"]}>Humanity in Music</h3>
                    <p className={styles["work__works-paragraph"]}>
                    Donation website towards Humanity in Music charity.                      </p>    
                </section>
            </section>

            {/*Second Section */}

            <section className={styles["work__works"]}>
                <img 
                    className = {styles["work__works-image"]}
                    src={candor}
                    alt = 'City of Toronto skyline - Candor Lease'
                />
                <section className = {styles["work__works-description"]}>
                    <h3 className = {styles["work__works-title"]}>Candor Lease</h3>
                    <p className={styles["work__works-paragraph"]}>
                        Full stack React App that simplies the creation of best practice Toronto rental contracts.
                    </p>    
                </section>
               
            </section>

            {/*Third Section */}

            <section className={styles["work__works"]}>
                <img 
                    className = {styles["work__works-image"]}
                    src={heang}
                    alt = "Woman smiling with hair flowing - Heang's hair salon"
                />
                <section className = {styles["work__works-description"]}>
                    <h3 className = {styles["work__works-title"]}>Heang's Hair Salon</h3>
                    <p className={styles["work__works-paragraph"]}>
                        Front end downtown Chinatown hair salon project using SCSS and purely vanilla html/js.
                    </p>    
                </section>
            </section>
            
        </section>
    </section>
  )
}

export default Work
