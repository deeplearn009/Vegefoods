import React from 'react'
import styles from './Header.module.scss'
import {Link} from "react-router";
import {FaShop} from "react-icons/fa6";
import {FaShoppingCart} from "react-icons/fa";

const Header = () => {
    return (
        <div className={styles.container}>
            <header>
                <div className={styles.logo}>
                    <Link to="/">Vegefoods</Link>
                </div>
                <nav>
                    <Link to='/'>Home</Link>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </nav>
                <div className={styles.icon}>
                    <Link to='/basket' id={styles.icon}><FaShoppingCart size={11}/></Link>
                </div>
            </header>
        </div>
    )
}
export default Header
