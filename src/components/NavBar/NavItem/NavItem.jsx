import { React } from 'react';
import styles from './NavItem.module.css';
import { NavLink } from 'react-router-dom';


const NavItem = (props) => {
    return (
        <NavLink to={props.path} className={styles.itemLink}>            
            <div className={styles.item}>
                <img src={props.img} alt="icon" className={styles.menuIcons} />
                <p>{props.name}</p>
            </div>
        </NavLink>
    );
}
export default NavItem;



// "https://cdn-icons-png.flaticon.com /512/126/126486.png"