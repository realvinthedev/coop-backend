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
          total_working_hour,
          ot_type,
          total_tardiness_min,
          is_tardiness,
          leave_type,
          vl_hours,
          sl_hours,
          el_hours,
          official_am_in_hour,
          official_am_in_min,
          official_pm_in_hour,
          official_pm_in_min,
          absent_hours,
          vl_nopay_hours,
          sl_nopay_hours,
          el_nopay_hours,
          regular_ot_hours,
          restday_ot_hours,
          special_ot_hours,
          legal_ot_hours
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
               total_working_hour,
               ot_type,
               total_tardiness_min,
               is_tardiness,
               leave_type,
               vl_hours,
               sl_hours,
               el_hours,
               official_am_in_hour,
               official_am_in_min,
               official_pm_in_hour,
               official_pm_in_min,
               absent_hours,
               vl_nopay_hours,
               sl_nopay_hours,
               el_nopay_hours,
               regular_ot_hours,
               restday_ot_hours,
               special_ot_hours,
               legal_ot_hours
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
          console.log(dtr)
          //displaying response to user: single workout by ID from DB
          res.status(200).json(dtr)
     } catch (error) {
          res.status(400).json({ error: 'No employee found' })
     }
}

const editSingleDtr = async (req, res) => {
     const { id } = req.params

     if (!mongoose.Types.ObjectId.isValid(id)) {
           return res.status(404).json({ error: 'No dtr found' })
     }
     try {
           const dtr = await Dtr.findOneAndUpdate({ _id: id }, {
                 ...req.body
           })

           //displaying response to user: deleted workout by ID from DB
           res.status(200).json(dtr)
     } catch (error) {
           res.status(400).json({ error: 'No dtr found' })
     }
}

const deleteSingleDtr = async (req, res) => {
     //id of the request parameter. Ex: xxx/delete/12e3289je3o2jtu2
     const { id } = req.params;

     //check if the id passed in parameter is valid id.
     if (!mongoose.Types.ObjectId.isValid(id)) {
           return res.status(404).json({ error: 'No Dtr found' })
     }
     try {
           //deleting an entry with the id in the parameter
           const dtr = await Dtr.findOneAndDelete({ _id: id })

           //return a response which is the deleted one.
           res.status(200).json(dtr)
     } catch (error) {
           res.status(400).json({ error: 'No Dtr found' })
     }
}


module.exports = {
     createDtr,
     getAllDtr,
     getAllDtrByDate,
     getSingleDtr,
     editSingleDtr,
     deleteSingleDtr
}