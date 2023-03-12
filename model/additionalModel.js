const mongoose = require('mongoose')

const Schema = mongoose.Schema
//defines the structures/model of the data in DB
const additionalSchema = new Schema({
      employee_id: {
            type: String,
            required: true
      },
      name: {
            type: String,
            required: true
      },
      date: {
            type: String,
            required: true
      },
      type: {
            type: String,
            required: true
      },
      item: {
            type: String,
            required: true
      },
      amount: {
            type: Number,
            required: true
      }
},

      {
            timestamps: true
      })
module.exports = mongoose.model('Additional',additionalSchema)