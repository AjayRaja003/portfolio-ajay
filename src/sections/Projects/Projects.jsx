import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://taskmanagemenmtappcapstone.netlify.app"
          h3="Task Management App"
          p="Full Stack project"
        />
        <ProjectCard
          src={freshBurger}
          link="https://blogguviaj.netlify.app"
          h3="Blog"
          p="frontend project"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/AjayRaja003/Attendance_system_medreck.git"
          h3="Attendance management system"
          p="Backend project"
        />
      </div>
    </section>
  );
}

export default Projects;
