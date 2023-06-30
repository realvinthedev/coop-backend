const { default: mongoose } = require('mongoose')
const Payslip = require('../model/payslipModel')


/**CREATE NEW EMPLOYEE */
const createPayslip = async (req, res) => {
     const {
          month,
          period,
          name,
          employee_id,

          base_salary,
          bi_monthly,
          daily,
          hourly,
          minute,

          basic_pay,
          allowance,
          ot_regular_hours,
          ot_regular_amount,
          ot_restday_hours,
          ot_restday_amount,
          ot_special_hours,
          ot_special_amount,
          ot_legal_hours,
          ot_legal_amount,
          add_ot_restday_hours,
          add_ot_restday_amount,
          add_ot_special_hours,
          add_ot_special_amount,
          add_ot_legal_hours,
          add_ot_legal_amount,
          night_diff_hours,
          night_diff_amount,
          prior_period_adj_earnings,
          earnings_total,


          tardiness_mins,
          tardiness_amount,
          undertime_mins,
          undertime_amount,
          restday_nopay_days,
          restday_nopay_amount,
          absence_days,
          absence_amount,
          vl_nopay_days,
          vl_nopay_amount,
          sl_nopay_days,
          sl_nopay_amount,
          el_nopay_days,
          el_nopay_amount,
          sss,
          philhealth,
          hdmf,
          wtax,
          cash_advance_loans,
          hhhc_savings,
          hhhc_membership_fee,
          hmo,
          lodging,
          utilities,
          deduction_total,
          net_pay,


     } = req.body

     try {
          const payslip = await Payslip.create({
               month,
               period,
               name,
               employee_id,

               base_salary,
               bi_monthly,
               daily,
               hourly,
               minute,

               basic_pay,
               allowance,
               ot_regular_hours,
               ot_regular_amount,
               ot_restday_hours,
               ot_restday_amount,
               ot_special_hours,
               ot_special_amount,
               ot_legal_hours,
               ot_legal_amount,
               add_ot_restday_hours,
               add_ot_restday_amount,
               add_ot_special_hours,
               add_ot_special_amount,
               add_ot_legal_hours,
               add_ot_legal_amount,
               night_diff_hours,
               night_diff_amount,
               prior_period_adj_earnings,
               earnings_total,


               tardiness_mins,
               tardiness_amount,
               undertime_mins,
               undertime_amount,
               restday_nopay_days,
               restday_nopay_amount,
               absence_days,
               absence_amount,
               vl_nopay_days,
               vl_nopay_amount,
               sl_nopay_days,
               sl_nopay_amount,
               el_nopay_days,
               el_nopay_amount,
               sss,
               philhealth,
               hdmf,
               wtax,
               cash_advance_loans,
               hhhc_savings,
               hhhc_membership_fee,
               hmo,
               lodging,
               utilities,
               deduction_total,
               net_pay,

          })
          res.status(200).json(payslip)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}


const getSinglePayslip = async (req, res) => {
     const { id } = req.params;

     try {
          const singlePayslip = await Payslip.findOne({ employee_id: `${id}` }).exec();
          //displaying response to user: single workout by ID from DB
          res.status(200).json(singlePayslip)
     } catch (error) {
          res.status(400).json({ error: 'No employee found' })
     }
}

const deleteSinglePayslip = async (req, res) => {
     //id of the request parameter. Ex: xxx/delete/12e3289je3o2jtu2
     const { id } = req.params;

     //check if the id passed in parameter is valid id.
     if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ error: 'No employee found' })
     }
     try {
          //deleting an entry with the id in the parameter
          const singlePayslip = await Payslip.findOneAndDelete({ _id: id })

          //return a response which is the deleted one.
          res.status(200).json(singlePayslip)
     } catch (error) {
          res.status(400).json({ error: 'No employee found' })
     }
}




module.exports = {
     createPayslip,
     getSinglePayslip,
     deleteSinglePayslip,
}