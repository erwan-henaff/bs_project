const mongoose = require('mongoose');
const { Schema } = mongoose;

const PickWin200Schema = new Schema ({
    id: false,
    mode : String,
    ranking : [
        [
            String,
            Number,
            Number
        ]

    ],    
    date : String
})

module.exports = mongoose.model('PicWin200', PickWin200Schema);