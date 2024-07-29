import React from 'react';
import styles from '../NavBarComponent/NavBar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import logo from './logo/logo.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';
interface NavBarProps {
 
}

const NavBarComponent: React.FC<NavBarProps> = () => {
  return (
 
     <nav className={`row ${styles.navbar}`}>
      <div className={styles.navbar__left}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.navbar__middle}>
        <ul className={styles['nav-links']}>
          <li><a className={styles.active} href="#">home</a></li>
          <li><a href="#">bikes</a></li>
          <li><a href="#">gear</a></li>
          <li><a href="#">parts</a></li>
          <li><a href="#">tyres</a></li>
          <li><a href="#">service-info</a></li>
          <li><a href="#">catalogues</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </div>
      <div className={styles.navbar__right}>
        <span className={styles.icon}>
       <a href="#"> <SearchIcon fontSize="large" /></a>
        </span>
        <span className={styles.icon}>
   
       <a href="#"> <ShoppingBagIcon fontSize='large'/></a>
        </span>
      </div>
      <hr className={styles.nav_hr}/>
    </nav>
    
  );
}

export default NavBarComponent;