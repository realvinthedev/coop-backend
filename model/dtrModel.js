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
      is_restday: {
            type: String,
            required: false
      },
      total_tardiness_min: {
            type: Number,
            required: false
      },
      total_undertime_min: {
            type: Number,
            required: false
      },
      leave_type: {
            type: String,
            required: false
      },
      absent_day: {
            type: Number,
            required: false
      },
      vl_day: {
            type: Number,
            required: false
      },
      sl_day: {
            type: Number,
            required: false
      },
      el_day: {
            type: Number,
            required: false
      },
      vl_nopay_day: {
            type: Number,
            required: false
      },
      sl_nopay_day: {
            type: Number,
            required: false
      },
      el_nopay_day: {
            type: Number,
            required: false
      },
      regular_ot_hours: {
            type: Number,
            required: false
      },
      restday_ot_hours: {
            type: Number,
            required: false
      },
      special_ot_hours: {
            type: Number,
            required: false
      },
      legal_ot_hours: {
            type: Number,
            required: false
      },
      day_type: {
            type: String,
            required: false
      },

},

      {
            timestamps: true
      })
module.exports = mongoose.model('Dtr',dtrSchema)