const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
app.use(express.static("public"))
app.get('/',(req,res)=>{
  res.send("<h1>SERVER IS UP!</h1>")
})
app.get('/FWT',(req,res)=>{
  res.sendFile(__dirname+"/public/FWT.html")
  // res.sendStatus(402)
})
app.get('/DSA',(req,res)=>{
  res.sendFile(__dirname+"/public/DSA.html")
})
app.get('/DSA/Dev',(req,res)=>{
  res.send("<h1>You clicked on Developer page</h1>")
})
app.get('/EME',(req,res)=>{
  res.send("<h1>Will be coming soon on the site :)</h1>")
})
app.listen(port)
