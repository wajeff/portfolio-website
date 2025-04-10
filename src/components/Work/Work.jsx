import styles from './Work.module.css'

function Work() {
  return (
    <section className = {styles.work}>
        <h2>Work</h2>
        <section className = {styles.work__container}>
            <section className={styles["work__works-left"]}>Humanity in Music</section>
            <section className={styles["work__works-right"]}>Heang's Hair Salon</section>
            <section className={styles["work__works-left"]}>Candor Lease</section>
        </section>
    </section>
  )
}

export default Work
