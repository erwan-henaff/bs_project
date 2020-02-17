const createError = require('http-errors');

const axios = require('axios');

const User = require('../models/Users');
const Battle = require('../models/Battles');


let key = require('../env/key');
let appkeyDCI = key.appkeyDCI;
let appkeyHome = key.appkeyHome;


exports.addUserNoLogin = async (req,res,next) => {

    try {

        let playerTag = req.body.playerTag;
        let whichKey = req.body.whichKey;

        let Bearer = "";

        if (whichKey=== "appkeyDCI") Bearer = `Bearer ${appkeyDCI}`
        else if (whichKey=== "appkeyHome") Bearer = `Bearer ${appkeyHome}`

        let url1 = "https://api.brawlstars.com/v1/players/%23" + playerTag
        let url2 = "https://api.brawlstars.com/v1/players/%23" + playerTag + "/battlelog"

        let arrayURL = [url1, url2];
        
        //////////////////////////////////////////////////////////////////////////////////////////
        //////////// get the battlelog from API, it's an object with "items" key being an array

        let userAndBattlelog = await Promise.all(
            arrayURL.map(async el => {
                return await axios({
                    method: 'GET',  
                    url: el,
                    headers: {
                        "Accept": "application/json",
                        'authorization': Bearer
                    }
                });
            })     
        )
        //////////////////////////////////////////////////////////////////////////
        //  take the battlelog of the response and store all battles in database
        let getBattleLog = userAndBattlelog[1];
        

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

        //////////////////////////////////////////////////////////////////////////
        //  take the user info of the response and store it in database

        let infoUser = userAndBattlelog[0].data;


        const checkUserExist = await User.findOne({tag: infoUser.tag}, (err, result)=> {
            if (err) {
                return err
            }
            else {
                return result
            }
        });
        
        if (checkUserExist === null) {

            /////////// this part is to create an array of the trophy level through time
            
            let trophiesNow = {
                trophies : infoUser.trophies
            }
            delete infoUser.trophies;
    
            const user = new User(infoUser);
            user.trophies.push(trophiesNow);

            await user.save();
            console.log(`${infoUser.name} with tag ${infoUser.tag} has been saved`);
            
        }
        else {
            let trophiesNow = {
                trophies : infoUser.trophies
            };
            checkUserExist.trophies.push(trophiesNow);

            await User.replaceOne({ tag : checkUserExist.tag}, checkUserExist);


            console.log(`new trophies level of ${infoUser.name} with tag ${infoUser.tag} has been saved`);
        }






        


        

        ////////////////////////////////////// send back to frontend teh response with user infos and battlelog

        res
                    .status(200)
                    .send([checkUserExist, getBattleLog.data.items]);   


    
    } catch (e) {
        next(e);
    } 
};


// exports.getBattles = async (req,res,next) => {
//     try {
//         const battles = await Battle.find().select('-__v');    
//         res.status(200).send(battles);
//     } catch (error) {
//         next(error);
//     }
// };
