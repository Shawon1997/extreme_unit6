const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    image :{ type: String},
    title :{ type: String},
    price :{ type: String},
    category :{ type: String},
    description :{ type: String},
    quantity :{ type: Number},
    Id :{ type: String} 
})

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;