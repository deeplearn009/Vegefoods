import React, {useEffect} from 'react'
import styles from './Admin.module.scss'
import {Link} from "react-router";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {getProductsThunk, postProductsThunk} from "../../redux/reducers/productSlice.js";
import ACard from "./components/ACard/ACard.jsx";

const Admin = () => {

    const dispatch = useDispatch()


    const data = useSelector((state) => state.products.products)

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    const valSchema = Yup.object({
        name: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
        price: Yup.string().required('Price is required').min(2, 'Price must be at least 2 characters'),
        image: Yup.string().required('Image is required').min(2, 'Image must be at least 2 characters')
    })

    const formik = useFormik({

        initialValues: {
            name: '',
            price: '',
            image: '',
        },
        valSchema,
        onSubmit: values => {
            dispatch(postProductsThunk(values))
        },

    });


    return (
        <div className={styles.container}>
            <header>
                <Link to="/">Home</Link>
                <Link to="/basket">Basket</Link>
                <Link to="/wishlist">Wishlist</Link>
            </header>
            <div className={styles.search}>
                <form onSubmit={formik.handleSubmit}>

                    <label htmlFor="name">Name</label>

                    <input

                        id="name"

                        name="name"

                        type="text"
                        {...formik.getFieldProps('name')}

                    />

                    <label htmlFor="price">Price</label>

                    <input

                        id="price"

                        name="price"

                        type="text"
                        {...formik.getFieldProps('price')}

                    />

                    <label htmlFor="image">Image</label>

                    <input

                        id="image"

                        name="image"

                        type="text"

                        {...formik.getFieldProps('image')}

                    />

                    <button type="submit">Submit</button>

                </form>
            </div>
            <div className={styles.cards}>
                {data?.map(item => <ACard item={item}/>)}
            </div>
        </div>
    )
}
export default Admin
