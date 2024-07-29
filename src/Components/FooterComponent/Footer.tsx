
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Footer.module.css'
type Props = {}

export default function Footer({}: Props) {
  return (
    <div className={`row ${styles.footer_container}`}>
        <div className="col-3">
            <h3>social share</h3>
           <div className={`${styles.icon_container}`}>
           <i className={`fa-brands fab fa-square-facebook fa-3x ${styles.social_icon}`}></i>
            <i className={`fa-brands fa-square-instagram fa-3x ${styles.social_icon}`}></i>
            <i className={`fa-brands fa-square-twitter fa-3x ${styles.social_icon}`}></i>
            <i className={`fa-brands fa-linkedin fa-3x ${styles.social_icon}`}></i>
           </div>
        </div>
        <div className={`col-3 ${styles.info_container}`}>
         <h3>event info</h3>
          
            <p>enter now</p>
            <p>event info</p>
            <p>course maps</p>
            <p>race park</p>
            <p>results</p>
            <p>FAQs</p>
            <p>am I registered?</p>
         
        </div>
        <div className={`col-3 ${styles.info_container}`}>
        <h3>registration</h3>
         
            <p>volunteers</p>
            <p>gallery</p>
            <p>press</p>
            <p>results</p>
            <p>privacy policy</p>
            <p>service plus</p>
            <p>contact</p>
         
        </div>
        <div className={`col-3 ${styles.info_container}`}>
        <h3>schedule</h3>
            <p>gallery</p>
            <p>about</p>
            <p>videos</p>
            <p>results</p>
            <p>FAQs</p>
            <p>results</p>
            <p>volunteers</p> 
        </div>
      
    </div>
  )
}