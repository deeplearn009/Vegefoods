import ProductModel from "../models/productModel.js";


const getProducts = async (req, res) => {
    const products = await ProductModel.find()
    res.json(products)
}

const postProduct = async (req, res) => {
    const {image, name, price} = req.body
    const product = {image, name, price}
    await ProductModel.create(product)
    res.json(product)
}

const deleteProduct = async (req, res) => {
    const {id} = req.params
    await ProductModel.findByIdAndDelete(id)
    res.json({message: 'Product deleted'})
    console.log('Product deleted with', id)
}

export {getProducts, postProduct, deleteProduct}