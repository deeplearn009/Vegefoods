import React from 'react'
import styles from './Home.module.scss'
import WBanner from "./components/wBanner/WBanner.jsx";
import IconSection from "./components/iconSection/IconSection.jsx";
import FProducts from "./components/featuredProducts/FProducts.jsx";
import Deals from "./components/deals/Deals.jsx";
import Newsletter from "./components/newsletter/Newsletter.jsx";

const Home = () => {
    return (
        <div>
            <WBanner/>
            <IconSection/>
            <FProducts/>
            <Deals/>
            <Newsletter/>
        </div>
    )
}
export default Home
