const mongoose = require('mongoose')

const Schema = mongoose.Schema
//defines the structures/model of the data in DB
const dtrSchema = new Schema({
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
      am_in_hour: {
            type: Number,
            required: true
      },
      am_in_min: {
            type: Number,
            required: true
      },
      am_out_hour: {
            type: Number,
            required: true
      },
      am_out_min: {
            type: Number,
            required: true
      },
      pm_in_hour: {
            type: Number,
            required: true
      },
      pm_in_min: {
            type: Number,
            required: true
      },
      pm_out_hour: {
            type: Number,
            required: true
      },
      pm_out_min: {
            type: Number,
            required: true
      },
      ot_in_hour: {
            type: Number,
            required: true
      },
      ot_in_min: {
            type: Number,
            required: true
      },
      ot_out_hour: {
            type: Number,
            required: true
      },
      ot_out_min: {
            type: Number,
            required: true
      },
      total_hour: {
            type: Number,
            required: true
      },
      tardiness: {
            type: Number,
            required: true
      }
},

      {
            timestamps: true
      })
module.exports = mongoose.model('Dtr',dtrSchema)