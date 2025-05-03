const mongoose = require("mongoose")

const entrySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
      },
      content: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now, // automatic current date
      },
}, {timestamps: true,})

module.exports = mongoose.model('Entry', entrySchema);