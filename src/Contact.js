import styles from './Contact.module.css';

function Contact(props) {
  return (
    <div className={`${styles.Contact} navElement`} id={props.id}>
      Contact
    </div>
  );
}

export default Contact;