const { default: mongoose } = require('mongoose')
const Dtr = require('../model/dtrModel')



const createDtr = async (req, res) => {
     const {
          employee_id,
          name,
          date,
          am_in_hour,
          am_in_min,
          am_out_hour,
          am_out_min,
          pm_in_hour,
          pm_in_min,
          pm_out_hour,
          pm_out_min,
          ot_in_hour,
          ot_in_min,
          ot_out_hour,
          ot_out_min,
          total_working_hour,
          total_ot_hour,
          ot_type,
          total_tardiness_min,
          is_tardiness,
          leave_hours,
          official_am_timein,
          is_absent,
     } = req.body

     try {
          const dtr = await Dtr.create({
               employee_id,
               name,
               date,
               am_in_hour,
               am_in_min,
               am_out_hour,
               am_out_min,
               pm_in_hour,
               pm_in_min,
               pm_out_hour,
               pm_out_min,
               ot_in_hour,
               ot_in_min,
               ot_out_hour,
               ot_out_min,
               total_working_hour,
               total_ot_hour,
               ot_type,
               total_tardiness_min,
               is_tardiness,
               leave_hours,
               official_am_timein,
               is_absent
          })
          res.status(200).json(dtr)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getAllDtr = async (req, res) => {
     try {
          const allDtr = await Dtr.find({}).sort({ createdAt: -1 })

          res.status(200).json(allDtr)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getAllDtrByDate = async (req, res) => {
     const { date } = req.params;

     try {
          const dtr = await Dtr.find({ date })
          //displaying response to user: single workout by ID from DB
          res.status(200).json(dtr)
     } catch (error) {
          res.status(400).json({ error: 'No dtr found' })
     }
}
const getSingleDtr = async (req, res) => {
     const { employee_id } = req.params;
     try {
          const dtr = await Dtr.find({ employee_id })
          //displaying response to user: single workout by ID from DB
          res.status(200).json(dtr)
     } catch (error) {
          res.status(400).json({ error: 'No employee found' })
     }
}


module.exports = {
     createDtr,
     getAllDtr,
     getAllDtrByDate,
     getSingleDtr
}