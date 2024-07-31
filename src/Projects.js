import styles from './Projects.module.css';

function Projects(props) {
  return (
    <div className={`${styles.Projects} navElement`} id={props.id}>
      Projects
    </div>
  );
}

export default Projects;