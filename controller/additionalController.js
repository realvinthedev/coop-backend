const { default: mongoose } = require('mongoose')
const Additional = require('../model/additionalModel')



const createAdditional = async (req, res) => {
     const {
          date_covered,
          employee_id,
          name,
          sss,
          philhealth,
          wtax,
          pagibig,
          lodging,
          water_electricity,
          hmo,
          share_capital,
          hhhc_savings,
          hhhc_membership_fee,
          cash_advances,
          pay_adjustment_deduction,
          other_deduction,
          total_deduction,
          allowance,
          pay_adjustment_earnings,
          other_earnings,
          total_earnings
     } = req.body

     try {
          const additional = await Additional.create({
               date_covered,
               employee_id,
               name,
               sss,
               philhealth,
               wtax,
               pagibig,
               lodging,
               water_electricity,
               hmo,
               share_capital,
               hhhc_savings,
               hhhc_membership_fee,
               cash_advances,
               pay_adjustment_deduction,
               other_deduction,
               total_deduction,
               allowance,
               pay_adjustment_earnings,
               other_earnings,
               total_earnings
          })
          res.status(200).json(additional)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getAllAdditionalByDate = async (req, res) => {
     const { id } = req.params;

     try {
          const additional = await Additional.find({ date })
          //displaying response to user: single workout by ID from DB
          res.status(200).json(additional)
     } catch (error) {
          res.status(400).json({ error: 'No additional found' })
     }
}
const getAllAdditional = async (req, res) => {
     try {
          const allAddtional = await Additional.find({}).sort({ createdAt: -1 })

          res.status(200).json(allAddtional)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}
const getAdditionalById = async (req, res) => {
     const { employee_id } = req.params;

     try {
          const additional = await Additional.find({ employee_id })
          res.status(200).json(additional)
     } catch (error) {
          res.status(400).json({ error: 'No dtr found' })
     }
}

module.exports = {
     createAdditional,
     getAdditionalById,
     getAllAdditionalByDate,
     getAllAdditional
}