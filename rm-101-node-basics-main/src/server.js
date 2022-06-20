const express =require("express")
//const express = () => {};
let app = express();
const connect=require("./config/db");
app.use(express.json())
const User=require("./controler/user.controler")
app.use("/",User)


app.listen(8000,async()=>{
    await connect()
    console.log("i am connected in port 8000")
})
module.exports = app;
