import projects from "../../data/projects.json";

import styles from  './Projects.module.css';

import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
<<<<<<< HEAD
    <section className={styles.container} id="projects">
=======
    <section className={styles.container}>
>>>>>>> origin/main
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <ProjectCard key={id} project={project} />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
