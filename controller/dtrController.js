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
          total_hour,
          tardiness,
          is_vl,
          is_sl,
          is_el,
          is_holiday
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
               total_hour,
               tardiness,
               is_vl,
               is_sl,
               is_el,
               is_holiday
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


module.exports = {
     createDtr,
     getAllDtr
}