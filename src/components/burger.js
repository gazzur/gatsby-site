import React from 'react'
import { Link } from 'gatsby'
import styles from './coolnav.css'
import { slide as Menu } from 'react-burger-menu'

const Burger = () => (
        <Menu>
            <Link to="/"  className="menu-item">Home</Link>
            <Link to="/about"  id="about" className="menu-item">About</Link>
            <Link to="#"  id="contact" className="menu-item">Contact</Link>
        </Menu>
);

export default Burger