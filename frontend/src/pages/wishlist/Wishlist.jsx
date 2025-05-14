import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getWishlistThunk} from "../../redux/reducers/wishlistSlice.js";
import styles from './Wishlist.module.scss'
import {Link} from "react-router";
import WCard from "./components/WCard/WCard.jsx";

const Wishlist = () => {

    const dispatch = useDispatch()

    const wishlist = useSelector(state => state.wishlist.wishlist)

    useEffect(() => {
        dispatch(getWishlistThunk())
    }, [])

    return (
        <div className={styles.container}>
            <header>
                <Link to="/">Home</Link>
                <Link to="/basket">Basket</Link>
            </header>
            <div className={styles.cards}>
                {wishlist?.map(item => <WCard item={item} />)}
            </div>
        </div>
    )
}
export default Wishlist
