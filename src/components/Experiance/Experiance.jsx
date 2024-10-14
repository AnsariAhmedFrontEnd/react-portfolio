import React from "react";

import styles from "./Experiance.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

<<<<<<< HEAD
const Experience = () => {
  return (
    <section className={styles.container} id="experiance">
      <h2 className={styles.title}>Skills</h2>
=======
 const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
>>>>>>> origin/main
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
<<<<<<< HEAD
      </div>
      {/* <ul className={styles.history}>
=======
        <ul className={styles.history}>
>>>>>>> origin/main
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
<<<<<<< HEAD
        </ul> */}
=======
        </ul>
      </div>
>>>>>>> origin/main
    </section>
  );
};

<<<<<<< HEAD
export default Experience;
=======
export default Experience;
>>>>>>> origin/main
