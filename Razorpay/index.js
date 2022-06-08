const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const path = require('path')
const shortid = require('shortid')
const Razorpay = require('razorpay')
const bodyParser = require('body-parser')
require('dotenv').config()
const connect =require("./config/db")
const {userlogin, userregister, Users} = require('./src/controller/user.controller')
const {Products,  Product} = require('./src/controller/product.controller')


const app = express()
app.use(cors())
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded());

const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://Shawon1997:Shawon1997@cluster0.azl8p.mongodb.net/backend'

mongoose.connect(MONGO_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
    },() => {
        console.log('Connected')
    }
)

app.post('/login', userlogin)
app.post('/register', userregister)
app.get('/login', Users)
app.get('/products', Products)
app.get('/products/:id', Product)

const razorpay = new Razorpay({
	key_id: process.env.RAZOR_PAY_KEY,
	key_secret: process.env.RAZOR_PAY_SECRET
})

app.get('/logo.svg', (req, res) => {
	res.sendFile(path.join(__dirname, 'logo.svg'))
})

app.post('/verification', (req, res) => {
	const secret = '12345678'

	console.log(req.body)

	const crypto = require('crypto')

	const shawon = crypto.createHmac('shawon1997', secret)
	shawon.update(JSON.stringify(req.body))
	const digest = shawon.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		require('fs').writeFileSync('payment.json', JSON.stringify(req.body, null, 4))
	} 
	res.json({ status: 'ok' })
})

app.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	const amount = 499
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})

app.listen("8080", async() => {
    await connect()
    console.log(" i am connected you at 8080")
}
)