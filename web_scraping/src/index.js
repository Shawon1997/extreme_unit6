const express=require("express")
const puppet=require("./puppet")
var cors = require('cors')
var app = express()
 
app.use(cors())
 

app.use(express.json())


app.post("/getjobs",async(req,res)=>{
      try {
          let data=await puppet()
          res.status(201).send(data)
      } 
      catch (error) {
          res.status(500).send(error)
      }
})

app.listen("8080",async()=>{
    try {
        console.log("listening on port 8080")
    } 
    catch (error) {
        console.log(error) 
    }
})