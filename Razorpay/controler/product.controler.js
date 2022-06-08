const Product = require('../models/product.model')


const Products = async(req, res, err) => {
    try{
        var products = await Product.find()
        res.status(200).send(products)
    }
    catch(err){
        res.send(err)
    }
}




const Product = async(req, res, err) => {
    try{
        var product = await Product.findOne({_id: req.params.id})
        .lean()
        .exec()

        res.status(201).send(product)
    }catch(err){
        res.send(err)
    }
}


module.exports = {
    Products,
    Product
};