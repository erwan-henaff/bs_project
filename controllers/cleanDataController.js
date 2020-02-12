const createError = require('http-errors');

// const mongoose = require('mongoose');


const Battle = require('../models/Battles');


exports.cleanData = async (req,res,next) => {
    try {
        const battle = await Battle.find({battleTime: {$exists:false}}); 
    
        battle.forEach(async el => {
            await Battle.findOneAndDelete({_id: el._id});
            return el._id;
        }) 

        const verify = await Battle.find({battleTime: {$exists:false}}); 

        res.status(200).send({result: verify.length});
    } catch (error) {
        next(error);
    }
};
