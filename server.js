import express from 'express'
const app = express()
let port = 4000;
app.get("/home",(req,res)=>{
  res.status(404).send("HOME PAGE")
})
app.listen(port,()=>{
  console.log(`Listening on port ${port} `)
})
