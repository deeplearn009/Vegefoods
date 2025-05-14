import React from 'react'
import styles from './BCard.module.scss'
import {useDispatch} from "react-redux";
import {deleteBasketThunk} from "../../../../redux/reducers/basketSlice.js";

const BCard = ({item}) => {

    const dispatch = useDispatch()

    const deleteFromBasket = (id) => {
        dispatch(deleteBasketThunk(id))
    }


    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={item.image} alt={item.name}/>
            </div>
            <div className={styles.description}>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={() => deleteFromBasket(item._id)}>Delete</button>
            </div>
        </div>
    )
}
export default BCard
