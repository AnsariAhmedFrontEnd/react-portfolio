import { getImageUrl } from "../../utils";
import styles from './ProjectCard.module.css';
const ProjectCard = ({project : {imageSrc, title, description, demo, source, skills}}) => {
  console.log(getImageUrl(imageSrc))
    return (
        <div className={styles.container}>
              <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`}  className={styles.image}/>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
              <div>
              <ul className={styles.skills}>
                {skills.map((skill, id) => {
                  return <li key={id} className={styles.skill}>{skill}</li>;
                })}
              </ul>
              
              <div className={styles.links}>
                <a href={demo} className={styles.link}>Demo</a>
                <a href={source} className={styles.link}>Source</a>
              </div>
              </div>
              </div>
    )
};


export default ProjectCard