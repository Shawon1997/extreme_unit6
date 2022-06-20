const express =require("express")
//const express = () => {};
let app = express();
app.use(express.json())
const User=require("./controler/user.controler")
app.use("/",User)


app.listen(8000,()=>{
    console.log("i am connected in port 8000")
})
module.exports = app;
