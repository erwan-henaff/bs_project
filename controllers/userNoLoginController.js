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

                const checkBattleExist = await Battle.findOne({battleTime: battle.battleTime, "event.mode" : battle.event.mode}, (err, result)=> {
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


        let checkUserExist = await User.findOne({tag: infoUser.tag}, (err, result)=> {
            if (err) {
                return err
            }
            else {
                return result
            }
        });
        
        if (checkUserExist === null) {

            /////////// this part is to create an array of the trophy level through time
            
            let trophiesNow = [{
                trophies : infoUser.trophies
            }];
            let highestTrophiesNow = [{
                highestTrophies: infoUser.highestTrophies
            }];
            let _3vs3VictoriesNow = [{
                '3vs3Victories': infoUser['3vs3Victories']
            }];
            let soloVictoriesNow = [{
                soloVictories: infoUser.soloVictories
            }];
            let duoVictoriesNow = [{
                duoVictories: infoUser.duoVictories
            }];
            let brawlersTrophiesNow = infoUser.brawlers.map(el=> {
                return  [{
                    trophies : el.trophies
                }]
            });

            delete infoUser.trophies;
            delete infoUser.highestTrophies;
            delete infoUser['3vs3Victories']; 
            delete infoUser.soloVictories;
            delete infoUser.duoVictories;
            infoUser.brawlers.forEach(el => {delete el.trophies})
            // delete infoUser.brawlers;

    
            const user = new User(infoUser);
            user.trophies = trophiesNow;
            user.highestTrophies = highestTrophiesNow;
            user['3vs3Victories'] = _3vs3VictoriesNow;
            user.soloVictories = soloVictoriesNow;
            user.duoVictories = duoVictoriesNow;

            user.brawlers.forEach((el,index) => el.trophies = brawlersTrophiesNow[index]);

            // user.trophies.push(trophiesNow);
            // user.highestTrophies.push(highestTrophiesNow);
            // user['3vs3Victories'].push(_3vs3VictoriesNow);
            // user.soloVictories.push(soloVictoriesNow);
            // user.duoVictories.push(duoVictoriesNow);

            // user.brawlers.forEach((el,index) => el.trophies.push(brawlersTrophiesNow[index]));
            
            await user.save();
            console.log(`${infoUser.name} with tag ${infoUser.tag} has been saved`);
            infoUser = user;
            
        } 

        else {

            //// prepare the data to be pushed in the array for adequate fields

            let trophiesNow = {
                trophies : infoUser.trophies
            };
            let highestTrophiesNow = {
                highestTrophies: infoUser.highestTrophies
            };
            let _3vs3VictoriesNow = {
                '3vs3Victories': infoUser['3vs3Victories']
            };
            let soloVictoriesNow = {
                soloVictories: infoUser.soloVictories
            };
            let duoVictoriesNow = {
                duoVictories: infoUser.duoVictories
            };
            
            ///// push the data into the user retrieved from our database 

            checkUserExist.trophies.push(trophiesNow);
            checkUserExist.highestTrophies.push(highestTrophiesNow);
            checkUserExist['3vs3Victories'].push(_3vs3VictoriesNow);
            checkUserExist.soloVictories.push(soloVictoriesNow);
            checkUserExist.duoVictories.push(duoVictoriesNow);

            for (let i = 0; i < checkUserExist.brawlers.length; i++) {
                for (let j = 0; j < infoUser.brawlers.length; j++) {
                    if ( checkUserExist.brawlers[i].id === infoUser.brawlers[j].id ) {
                        checkUserExist.brawlers[i].trophies.push({
                            trophies : infoUser.brawlers[j].trophies
                        })
                    }                   
                }
            }            
            //// below is the line that secures the data in case a new brawler has been unlocked,
            //// if not, all will be replaced by the for loop below. 
            infoUser.brawlers.forEach(el => {
                el.trophies = [{
                                trophies : el.trophies
                            }]
            })

            //// put the new data into the user retrieved from supercell api 

            infoUser.trophies = checkUserExist.trophies;
            infoUser.highestTrophies = checkUserExist.highestTrophies;
            infoUser['3vs3Victories'] = checkUserExist['3vs3Victories']; 
            infoUser.soloVictories = checkUserExist.soloVictories;
            infoUser.duoVictories = checkUserExist.duoVictories;

            //// instead of forEach method assuming array order is always the same 
            //// use a for loop with brawler id checking 

            for (let i = 0; i < infoUser.brawlers.length; i++) {
                for (let j = 0; j < checkUserExist.brawlers.length; j++) {
                    if (infoUser.brawlers[i].id === checkUserExist.brawlers[j].id) {
                        infoUser.brawlers[i].trophies = checkUserExist.brawlers[j].trophies
                    }                   
                }
            }

            //////// finally save the new data with right format in the database 
            await User.replaceOne({ tag : infoUser.tag}, infoUser);

            console.log(`new trophies level of ${infoUser.name} with tag ${infoUser.tag} has been saved`);
        }

        ////////////////////////////////////// send back to frontend the response with user infos and battlelog
        res
                    .status(200)
                    .send([infoUser, getBattleLog.data.items]);   
   
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
