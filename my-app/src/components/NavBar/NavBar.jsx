import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './Nav.module.css';

const NavBar = () => {
    return (
        <nav>
            <NavItem name='Profile' img='https://cdn-icons-png.flaticon.com/512/1077/1077063.png'/>
            <NavItem name='Messages' img='https://cdn-icons-png.flaticon.com/512/1077/1077049.png'/>
            <NavItem name='News' img='https://cdn-icons-png.flaticon.com/512/1077/1077048.png'/>
            <NavItem name='Music' img='https://cdn-icons-png.flaticon.com/512/461/461238.png'/>
            <NavItem name='Settings' img='https://cdn-icons-png.flaticon.com/512/2099/2099058.png'/>
        </nav>
    );
}


export default NavBar;