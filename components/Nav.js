import React from 'react';
import styles from '../styles/Home.module.css'

const Nav = () => {
    return (
        <>
            <header className={styles.nav}>
                <h2>logo</h2>
                <ul>
                    <li><a className={styles.mainLink} href="#">Home</a></li>
                    <li><a className={styles.mainLink} href="#">products</a></li>
                    <li><a className={styles.mainLink} href="#">About</a></li>
                    <li><a className={styles.mainLink} href="connectUs">Connect us</a></li>
                </ul>
                <a className={styles.btn} href='login'>login</a>
            </header>
        </>
    );
}

export default Nav;
