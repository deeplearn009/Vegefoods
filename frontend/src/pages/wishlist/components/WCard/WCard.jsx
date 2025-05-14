import React from 'react'
import styles from './WCard.module.scss'
import {useDispatch} from "react-redux";
import {deleteWishlistThunk} from "../../../../redux/reducers/wishlistSlice.js";

const WCard = ({item}) => {

    const dispatch = useDispatch();

    const deleteFromWishlist = (id) => {
        dispatch(deleteWishlistThunk(id))
    }


    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={item.image} alt={item.name}/>
            </div>
            <div className={styles.description}>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={() => deleteFromWishlist(item._id)}>Delete</button>
            </div>
        </div>
    )
}
export default WCard
