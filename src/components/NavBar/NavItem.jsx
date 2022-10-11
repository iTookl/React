import { React } from 'react';
import styles from './Nav.module.css';


const NavItem = (props) => {
    return (
        <div className={styles.item}>
            <img src={props.img} alt="messages icon" className={styles.menuIcons} />
            {props.name}
        </div>
    );
}

export default NavItem;



// "https://cdn-icons-png.flaticon.com/512/126/126486.png"