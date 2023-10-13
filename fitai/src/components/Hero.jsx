import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <>
      <div className={`${styles.heroTextBlock}`}>
        <h5 className={styles.heroText}>Hello my name is</h5>
        <h1 className={`${styles.heroText} ${styles.heroName}`}>
          Michael Margrave.
        </h1>
        <h1 className={styles.heroText}>I design stuff for the web.</h1>
      </div>
    </>
  )
}

export default Hero
