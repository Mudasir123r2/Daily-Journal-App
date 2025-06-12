const mongoose = require("mongoose")

const entrySchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // reference to the User model
      },
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
        default: Date.now, 
      },
}, {timestamps: true,})

module.exports = mongoose.model('Entry', entrySchema);