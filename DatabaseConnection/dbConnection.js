const mongoose = require('mongoose')
async function inConnect(){
  try{
    await mongoose.connect("mongodb+srv://22cseaiml007adityaroshandash:cd%20%2Fbin%2Fvaishnavas@cluster0.3zejvqj.mongodb.net/")
    console.log("Connected")
  } catch (e) {
    console.log(e.message)
  }
}
inConnect()

