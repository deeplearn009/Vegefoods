import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: String, required: true},
}, {timestamps: true})

const ProductModel = mongoose.model('Product', productSchema)

export default ProductModel