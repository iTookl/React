import  React  from 'react';
import styles from './../Messages.module.css';
import { NavLink } from 'react-router-dom';





const DialogItem = (props) => {
    let path = '/messages/' + props.id;
    return(
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}


export default DialogItem;