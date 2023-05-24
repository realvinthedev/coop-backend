const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const posSchema = new Schema({
      pos_date: {
            type: String,
            required: true
      },
      pos_transaction_id: {
            type: String,
            required: true
      },
      pos_items: [
            {
                  product_code: String,
                  product_name: String,
                  product_description: String,
                  product_cost_price: Number,
                  product_selling_price: Number,
                  product_quantity: Number,
                  product_total: Number,
                  product_cost_total: Number
            },
      ],
      pos_cost_total: {
            type: Number,
            required: true
      },
      pos_total: {
            type: Number,
            required: true
      }
},
      {
            timestamps: true
      })


module.exports = mongoose.model('Pos', posSchema)