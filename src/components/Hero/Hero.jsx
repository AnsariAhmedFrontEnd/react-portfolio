import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
<<<<<<< HEAD
        <h1 className={styles.title}>Hi, I'm Ahmed</h1>
        <p className={styles.description}>
          I am a MERN stack developer, passionate about creating dynamic web
          applications and always learning new technologies.
        </p>
        <a href="mailto:am27043@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/myImage.jpg")}
        alt="Hero"
        className={styles.heroImg}
      />
=======
        <h1 className={styles.title}>Hi, I'm Ada</h1>
        <p className={styles.description}>
          I am a full stack developer with 5 years of experiance in React and
          NodeJs. Reach out if you want to learn more!
        </p>
        <a href="mailto:am27043@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero" className={styles.heroImg} />
>>>>>>> origin/main
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
