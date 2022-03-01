

const mongoose = require('mongoose')



mongoose.connect('mongodb://localhost:27017/LoginServerDB', {
    useNewUrlParser: true
})


const User = mongoose.model('User', {
    
    uname: String,
    password: String,
    
})


module.exports = {
    User
}