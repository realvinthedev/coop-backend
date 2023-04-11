const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const savingsSchema = new Schema({
      member_id: {
            type: String,
            required: true
      },
      firstname: {
            type: String,
            required: true
      },
      middlename: {
            type: String,
            required: false
      },
      lastname: {
            type: String,
            required: true
      },
      date: {
            type: String,
            required: false
      },
      particulars: {
            type: String,
            required: false
      },
      type: {
            type: String,
            required: false
      },
      amount: {
            type: Number,
            required: false
      },
      reference_document: {
            type: String,
            required: false
      },
      remarks: {
            type: String,
            required: false
      },
      
     
   
     
      
},
      {
            timestamps: true
      })


module.exports = mongoose.model('Savings', savingsSchema)