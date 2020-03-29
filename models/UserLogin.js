const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserLoginSchema = new Schema ({
    id: false,
    email: {
        type: String,
        required: true,
        unique:true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User'
    },
    tag : {
        type: String,
        default:''
    },
    cronJobs : [Number],
    date : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('UserLogin', UserLoginSchema);