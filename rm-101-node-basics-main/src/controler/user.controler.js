const express=require("express")
const router=express()
const path=require("path")

const User=require("../assets/user.json")
//const html=require("../assets/")

router.get("",async(req,res)=>{
    return res.sendFile(path.join(__dirname,"../assets/users.html"))
})
router.get("/users",async(req,res)=>{
    try {
        const user=await User.find().lean().exec()
       res.send(user)
    } catch (err) {
        res.send(err.message)
    }
})
router.get("/users/:id",async(req,res)=>{
    try {
        const user=await User.findById(req.params.id).lean().exec()
       res.send(user)
    } catch (err) {
        res.send(err.message)
    }
})
router.post("/users",async(req,res)=>{
    try {
        const user=await User.create(req.body)
       res.send(user)
    } catch (err) {
        res.send(err.message)
    }
})

module.exports=router