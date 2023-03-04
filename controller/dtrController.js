const { default: mongoose } = require('mongoose')
const Dtr = require('../model/dtrModel')



const createDtr = async (req, res) => {
     const {
          employee_id,
          firstname,
          middlename,
          lastname,
          date,
          am_in,
          am_out,
          pm_in,
          pm_out,
          ot_in,
          ot_out,
          tardiness,
          is_vl,
          is_sl,
          is_el,
          is_holiday
     } = req.body

     try {
          const dtr = await Dtr.create({
               employee_id,
               firstname,
               middlename,
               lastname,
               date,
               am_in,
               am_out,
               pm_in,
               pm_out,
               ot_in,
               ot_out,
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