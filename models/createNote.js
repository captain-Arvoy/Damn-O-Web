const mongoose = require("mongoose")

const createSchema = new mongoose.Schema({
  URL: String,
  content: String,
  createdAt: Date,
  updatedAt: Date
})
module.exports = mongoose.model("createNote", createSchema)
