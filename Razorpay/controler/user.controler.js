
const User = require('../models/user.model')

const jwt = require('jsonwebtoken')




const userlogin = async(req, res) => {
    try{ 
        var login = await User.findOne({email: req.body.email})
        var token = process.env.TOKEN
        if(login){
            if(login.password === req.body.password){
                res.status(200).send({
                    message: 'Login Successful',
                    user: login,
                    token: token
                })
            }else{
                res.status(403).send({
                    message: 'Invalid Password'
                })
            }
        }else{
            res.status(403).send({
                message: 'Invalid Email'
            })
        }
    }catch(err){
        res.status(500).send({
            message: 'Please Register first'
        })
    }
}

const userregister = async(req, res) => {
    try{
        var exist = await User.findOne({email: req.body.email})
        if(exist){
            res.status(500).send({
                message: 'Email already exist'
            })
        }else{
            var user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                cart: [],
                wishlist: [],
                orders: [],
                address: []
                })
            user.save()
            let token = `Bearer-${user.email}${Date.now()}`
            res.status(200).send({
                message: 'Registration Successful',
                token: token,
                user: user
            })
        }
    }catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

const Users = async (req, res) => {
    try{
        var users = await User.find({})
        res.send(users)
    }catch(err){
        res.send({
            message: 'Error'
        })
    }
}


module.exports = {
    userlogin,
    userregister,
    Users
}