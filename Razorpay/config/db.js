const mongoose=require("mongoose")
const connect=()=>{
    return mongoose.connect("mongodb+srv://Shawon1997:Shawon1997@cluster0.azl8p.mongodb.net/backend")
} 
module.exports=connect