import styles from './Work.module.css'

function Work() {
  return (
    <section className = {styles.work}>
        <h2 className = {styles.work__title}>Work.</h2>
        <section className = {styles.work__container}>

            {/*First Section */}

            <section className={styles["work__works"]}>
                <img 
                    className = {styles["work__works-image"]}
                    src='../../src/assets/Work/humanity-in-music.png'
                />
                <section className = {styles["work__works-description"]}>
                    <h3 className = {styles["work__works-title"]}>Humanity in Music</h3>
                    <p className = {["styles.work__works-paragraph"]}>
                    Donation website towards Humanity in Music charity.                      </p>    
                </section>
            </section>

            {/*Second Section */}

            <section className={styles["work__works"]}>
                <section className = {styles["work__works-description"]}>
                    <h3 className = {styles["work__works-title"]}>Candor Lease</h3>
                    <p className = {["styles.work__works-paragraph"]}>
                        Full stack React App that simplies the creation of best practice Toronto rental contracts.
                    </p>    
                </section>
                <img 
                    className = {styles["work__works-image"]}
                    src='../../src/assets/Work/candor.png'
                />
            </section>

            {/*Third Section */}

            <section className={styles["work__works"]}>
                <img 
                    className = {styles["work__works-image"]}
                    src='../../src/assets/Work/hair.jpg'
                />
                <section className = {styles["work__works-description"]}>
                    <h3 className = {styles["work__works-title"]}>Heang's Hair Salon</h3>
                    <p className = {["styles.work__works-paragraph"]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid aut voluptas cumque itaque sdfsdfsd
                    </p>    
                </section>
            </section>
            
        </section>
    </section>
  )
}

export default Work
