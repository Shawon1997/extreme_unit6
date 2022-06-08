const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String},
    email: { type: String},
    password: { type: String},
    cart: { type: Array },
    wishlist: { type: Array},
    orders: { type: Array},
    address: { type: Array},
  
},{
    timestamps: true,versionKey:true
});






var User = new mongoose.model('User', userSchema);

module.exports = User;