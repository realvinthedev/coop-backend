const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const payslipSchema = new Schema({
      employee_id: {
            type: String,
            required: true
      },
      month: {
            type: String
      },
      period: {
            type: String
      },
      net: {
            type: String
      },

},

      {
            timestamps: true
      })


module.exports = mongoose.model('Payslip', payslipSchema)