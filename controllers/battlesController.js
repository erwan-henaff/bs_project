const createError = require('http-errors');

const axios = require('axios');

const Battle = require('../models/Battles');

let key = require('../env/key');
let appkeyDCI = key.appkeyDCI;
let appkeyHome = key.appkeyHome;



exports.addBattles = async (req,res,next) => {

    try {

        let playerTag = req.body.playerTag;
        let whichKey = req.body.whichKey;

        let Bearer = "";

        if (whichKey=== "appkeyDCI") Bearer = `Bearer ${appkeyDCI}`
        else if (whichKey=== "appkeyHome") Bearer = `Bearer ${appkeyHome}`

        let url = "https://api.brawlstars.com/v1/players/%23" + playerTag + "/battlelog"

        //////////////////////////////////////////////////////////////////////////////////////////
        //////////// get the battlelog from API, it's an object with "items" key being an array

        const getBattleLog = await axios({
            method: 'GET',  
            url: url,
            headers: {
                "Accept": "application/json",
                'authorization': Bearer
            }
        });


        getBattleLog.data.items.forEach( async (element, index) => {

            try {
                const battle = new Battle (element);

                //// here we check for each battle with findOne of mongoose if there is a battle with the battletime 
                //// return null is none, one object if exist, or error if error

                const checkBattleExist = await Battle.findOne({battleTime: battle.battleTime}, (err, result)=> {
                    if (err) {
                        return err
                    }
                    else {
                        return result
                    }
                });
                
                if (checkBattleExist === null) {
                    await battle.save();
                    console.log(`${index} battle among 25 from #9RGYGP20P  battle_log have been added`);
                    // res
                    //     .status(200)
                    //     .send(battle);
                }
                else {
                    console.log(`${index} battle is already in it`);
                }
                         
            } catch (e) {
                next(e);
            }
            
        });

        res
                    .status(200)
                    .send(getBattleLog.data.items);   


    
    } catch (e) {
        next(e);
    } 
};


exports.getBattles = async (req,res,next) => {
    try {
        const battles = await Battle.find().select('-__v');    
        res.status(200).send(battles);
    } catch (error) {
        next(error);
    }
};
