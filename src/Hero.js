import styles from './Hero.module.css';

function Hero(props) {
  return (
    <div className={`${styles.Hero} navElement`} id={props.id}>
      Hero
    </div>
  );
}

export default Hero;