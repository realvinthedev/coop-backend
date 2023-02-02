const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const credentialsSchema = new Schema({
      username: {
            type: String,
            required: true
      },
      password: {
            type: String,
            required: true
      }
})

credentialsSchema.statics.signup = async function (username, password) {

      // validation
      if (!username || !password) {
            throw Error('All fields must be filled')
      }

      const exists = await this.findOne({ username })

      if (exists) {
            throw Error('Username already used')
      }

      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password, salt)

      const user = await this.create({ username, password: hash })

      return user
}

credentialsSchema.statics.login = async function (username, password) {

      // validation
      if (!username || !password) {
            throw Error('All fields must be filled')
      }
     
      const user = await this.findOne({ username })
      if (!user) {
            throw Error('Incorrect username')
      }

      const match = await bcrypt.compare(password, user.password)

      if(!match){
            throw Error('Incorrect password')
      }

      return user
}


module.exports = mongoose.model('Credentials', credentialsSchema)