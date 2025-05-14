import WishlistModel from "../models/wishlistModel.js";

const getWishlist = async (req, res) => {
    const wishlist = await WishlistModel.find()
    res.json(wishlist)
}

const postWishlist = async (req, res) => {
    const {image, name, price} = req.body
    const wishlist = {image, name, price}
    await WishlistModel.create(wishlist)
    res.json(wishlist)
}

const deleteWishlist = async (req, res) => {
    const {id} = req.params
    await WishlistModel.findByIdAndDelete(id)
    res.json({message: 'Product deleted'})
    console.log('Product deleted with', id)
}

export {getWishlist, postWishlist, deleteWishlist}