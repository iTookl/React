import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={styles.singButtons}>
                <a href="#" className={styles.button}>Sing In</a>
                <a href="#" className={styles.button}>Sign Up</a>
            </div>

            <div>Askyy</div>
        </header>
    );
}



export default Header;