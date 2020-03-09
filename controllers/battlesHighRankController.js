const createError = require('http-errors');

const axios = require('axios');

const BattleHighRank = require('../models/BattlesHighRank');

let key = require('../env/key');
let appkeyDCI = key.appkeyDCI;
let appkeyHome = key.appkeyHome;

// let sliceIndex = -1;

let trigger = false;



exports.addBattlesHighRank = async (req,res,next) => {

    // sliceindex will come from the post request and give wich battlelogs of the 200 best players we will require
    // from the 200 players, we cut the group in 8 slices of 25.
    // it avoids doing 200 request at once on the server. 

    // if (req.body.slice || req.body.slice === 0) sliceIndex= req.body.slice;
    trigger = req.body.trigger;

    try {
        let whichKey = req.body.whichKey;
        let Bearer = "";
        if (whichKey=== "appkeyDCI") Bearer = `Bearer ${appkeyDCI}`
        else if (whichKey=== "appkeyHome") Bearer = `Bearer ${appkeyHome}`

        let url = "https://api.brawlstars.com/v1/rankings/global/players";

        //////////////////////////////////////////////////////////////////////////////////////////
        //////////// get the list of best world player from API, it's an object with "items" key being an array

        if (trigger === true) {

            console.log("in the trigger === true block, return sliceindex")


            // sliceIndex++;
            // if (sliceIndex > 1) sliceIndex = 0;

            const getListBestPlayers = await axios({
                method: 'GET',  
                url: url,
                headers: {
                    "Accept": "application/json",
                    'authorization': Bearer
                }
            });

            ////////////////// extract the player tags into an array 

            let getListBestPlayers1 = getListBestPlayers.data.items.map(el => {
                return el.tag.slice(1);
            })
            /////// cut the array in 8 smaller arrays to avoid too many api calls at once
            let listTrunk = [];
            for (let i = 0; i < 8; i++) {
                listTrunk[i] = getListBestPlayers1.slice(i*25, (i+1)*25)  
            
        //        let sliceOfList = listTrunk[sliceIndex%8];
                ////// get an array of 25 battlelogs promised (with 25 battles each);

                setTimeout( async () => {

                    let listTrunkBattleLog = await Promise.all(
                        listTrunk[i].map(async el =>{
                            let url = `https://api.brawlstars.com/v1/players/%23${el}/battlelog`;
                            return await axios({
                                method: 'GET',  
                                url: url,
                                headers: {
                                    "Accept": "application/json",
                                    'authorization': Bearer
                                }
                            });
                        })
                    )
                    let listTrunkBattleLogItems = listTrunkBattleLog.map(el=> {
                        return el.data.items
                    })
                    ////// transform the array of 25 battlogs in one array of 25 * 25 battles 
                    let arrOf25PlayersResult = listTrunkBattleLogItems.reduce((acc, curVal)=>{
                        return acc.concat(curVal)
                    },[])

                    ////// save the battles in database if not already in there
                    arrOf25PlayersResult.forEach( async (element, index) => {
                        try {
                            const battle = new BattleHighRank (element);
                            //// here we check for each battle with findOne of mongoose if there is a battle with the battletime 
                            //// return null is none, one object if exist, or error if error
                            const checkBattleExist = await BattleHighRank.findOne({battleTime: battle.battleTime}, (err, result)=> {
                                if (err) {
                                    return err
                                }
                                else {
                                    return result
                                }
                            });
                            
                            if (checkBattleExist === null) {
                                await battle.save();
                                console.log(`${index} battle among the tops player have been added`);
                            }
                            else {
                                console.log(`${index} battle is already in it`);
                            }

                            ////////////////////////////////////////////////////////////////////////////////////////////////////
                            ///////// important : send the message at the end of all the asynchronous events (624 = 25  * 25 - 1) 
                            if (i===7 && index === 624) {
                                console.log(`***********************************************end of the ${i} loop and ${index} for each`)
                                res
                                    .status(200)
                                    .send({message : "saved the results of the 200 best players"});   
                            }
                                    
                        } catch (e) {
                            next(e);
                        }
                        
                    });
                    console.log(`***********************************************inside the ${i} setTimeout loop trigger = true `)

                }, 10000*i)

                ///// above the setTimeout function is triggered 10 seconds * i  inside the for loop, so 8 setTimeout or launched

                console.log(`***********************************************inside the ${i} loop trigger = true `)


            }
          
        }
        else {
            console.log("in the trigger = false block")
            res
                .status(200)
                .send({message : "didn't trigger the collection of data"})
        }

    
    } catch (e) {
        next(e);
    } 

};
