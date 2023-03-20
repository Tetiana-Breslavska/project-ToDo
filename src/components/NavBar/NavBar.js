// import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { setSearchString } from '../../redux/store';

const NavBar = () => {


    return (
        <nav className={styles.nav_bar}>
            <Link to="/"><span className="fa fa-tasks" /></Link>
            <ul className={styles.nav_links}>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                    to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                    to="/favorite">Favorite</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                    to="/about">About</NavLink></li>
                
            </ul>
        </nav>

    );
};


export default NavBar;