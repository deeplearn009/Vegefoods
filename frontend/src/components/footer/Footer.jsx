import React from 'react'
import styles from './Footer.module.scss'
import {FaHeart} from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.container}>
            <footer>
                <p>Copyright ©2025 All rights reserved | This template is made with <FaHeart color={'red'}/> by Colorlib</p>
            </footer>
        </div>
    )
}
export default Footer
