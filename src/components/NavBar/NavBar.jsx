import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './Nav.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <NavItem name='Profile' img='https://cdn-icons-png.flaticon.com/512/1077/1077063.png'  path='/profile'/>
            <NavItem name='Messages' img='https://cdn-icons-png.flaticon.com/512/1077/1077049.png' path='/messages'/>
            <NavItem name='News' img='https://cdn-icons-png.flaticon.com/512/1077/1077048.png' path='/news' />
            <NavItem name='Music' img='https://cdn-icons-png.flaticon.com/512/461/461238.png'  path='/music' />
            <NavItem name='Settings' img='https://cdn-icons-png.flaticon.com/512/2099/2099058.png'  path='/settings' />
        </nav>
    );
}


export default NavBar;