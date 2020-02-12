const createError = require('http-errors');

// const mongoose = require('mongoose');


const Battle = require('../models/Battles');


exports.cleanData = async (req,res,next) => {
    try {
        const battle = await Battle.find({
            "event.id": "15000196",
            "event.map": "Forsaken Falls",
            "battle.players.brawler.trophies" : { $gte: 600 },
        }); 
    
        
        // battle.forEach(async el => {    
        //     await Battle.findOneAndDelete({_id: el._id});
        //     return el._id;
        // }) 

        // const verify = await Battle.find({battleTime: "20200210T231727.000Z"}); 

        res.status(200).send({result: battle.length, wholeresult: battle});
    } catch (error) {
        next(error);
    }
};
