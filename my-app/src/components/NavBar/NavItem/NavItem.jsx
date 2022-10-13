import { React } from 'react';
import styles from './NavItem.module.css';


const NavItem = (props) => {
    return (
        <div className={styles.item}>
            <img src={props.img} alt="icon" className={styles.menuIcons} />
            <p>{props.name}</p>
        </div>
    );
}

export default NavItem;



// "https://cdn-icons-png.flaticon.com /512/126/126486.png"