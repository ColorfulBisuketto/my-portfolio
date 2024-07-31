import styles from './AboutMe.module.css';

function AboutMe(props) {
  return (
    <div className={`${styles.AboutMe} navElement`} id={props.id}>
      About
    </div>
  );
}

export default AboutMe;