const { default: mongoose } = require('mongoose')
const Additional = require('../model/additionalModel')



const createAdditional = async (req, res) => {
     const {
          employee_id,
          name,
          date,
          type,
          item,
          amount
     } = req.body

     try {
          const additional = await Additional.create({
               employee_id,
               name,
               date,
               type,
               item,
               amount
          })
          res.status(200).json(additional)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getAllAdditional = async (req, res) => {
     try {
          const allAdditional = await Additional.find({}).sort({ createdAt: -1 })

          res.status(200).json(allAdditional)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getAllAdditionalByDate = async (req, res) => {
     const { date } = req.params;

     try {
          const additional = await Additional.find({ date })
          //displaying response to user: single workout by ID from DB
          res.status(200).json(additional)
     } catch (error) {
          res.status(400).json({ error: 'No additional found' })
     }
}


module.exports = {
     createAdditional,
     getAllAdditional,
     getAllAdditionalByDate
}