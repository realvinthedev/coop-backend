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
     
      total_working_hour: {
            type: Number,
            required: true
      },
      ot_type: {
            type: String,
            required: true
      },
      total_tardiness_min: {
            type: Number,
            required: true
      },
      is_tardiness: {
            type: Number,
            required: true
      },
      vl_hours: {
            type: Number,
            required: true
      },
      sl_hours: {
            type: Number,
            required: true
      },
      el_hours: {
            type: Number,
            required: true
      },
      leave_type: {
            type: String,
            required: false
      },
      official_am_in_hour: {
            type: Number,
            required: false
      },
      official_am_in_min: {
            type: Number,
            required: false
      },
      official_pm_in_hour: {
            type: Number,
            required: false
      },
      official_pm_in_min: {
            type: Number,
            required: false
      },
      absent_hours: {
            type: Number,
            required: true
      },
      vl_nopay_hours: {
            type: Number,
            required: true
      },
      sl_nopay_hours: {
            type: Number,
            required: true
      },
      el_nopay_hours: {
            type: Number,
            required: true
      },
      regular_ot_hours: {
            type: Number,
            required: true
      },
      restday_ot_hours: {
            type: Number,
            required: true
      },
      special_ot_hours: {
            type: Number,
            required: true
      },
      legal_ot_hours: {
            type: Number,
            required: true
      },
},

      {
            timestamps: true
      })
module.exports = mongoose.model('Dtr',dtrSchema)