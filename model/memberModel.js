const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const memberSchema = new Schema({
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
      membership_date: {
            type: String,
            required: true
      },
      status: {
            type: String,
            required: false
      },
      contact_number: {
            type: String,
            required: false
      },
      email: {
            type: String,
            required: false
      },
      hhhc_membership_number: {
            type: String,
            required: false
      },
      bod_res: {
            type: String,
            required: false
      },
      coop_savings_account_number: {
            type: String,
            required: false
      },
      kaya_atm_card_number: {
            type: String,
            required: false
      },
      kaya_atm_savings_account_number: {
            type: String,
            required: false
      },
      mbh: {
            type: String,
            required: false
      },
      atm_passbook_fee: {
            type: String,
            required: false
      },
      atm_status: {
            type: String,
            required: false
      },
      pb_account_number: {
            type: String,
            required: false
      },
      pb_account_number_series: {
            type: String,
            required: false
      },
      passbook_series_number: {
            type: String,
            required: false
      },
      affiliation_org: {
            type: String,
            required: false
      },
      passbook_printed: {
            type: String,
            required: false
      },
      remarks: {
            type: String,
            required: false
      },
      notes: {
            type: String,
            required: false
      },
      
},
      {
            timestamps: true
      })


module.exports = mongoose.model('Member', memberSchema)