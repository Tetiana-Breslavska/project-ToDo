// import Container from '../Container/Container';
import styles from './NavBar.module.scss';
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { setSearchString } from '../../redux/store';

const NavBar = () => {


    return (
        <nav className={styles.nav_bar}>
            <a href="/" ><span className="fa fa-tasks" /></a>
            <ul className={styles.nav_links}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/favorite">Favorite</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>

    );
};


export default NavBar;