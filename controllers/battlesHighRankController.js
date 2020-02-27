const createError = require('http-errors');

const axios = require('axios');

const BattleHighRank = require('../models/BattlesHighRank');

let key = require('../env/key');
let appkeyDCI = key.appkeyDCI;
let appkeyHome = key.appkeyHome;

let sliceIndex = -1;

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

        let clearingValue = setInterval(async ()=> {
            if (trigger === true && sliceIndex < 2) {
                sliceIndex++;
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
                }
                /////// select one of the smaller array by rotation
                let sliceOfList = listTrunk[sliceIndex%8];
                ////// get an array of 25 battlelogs promised (with 25 battles each);
                let listTrunkBattleLog = await Promise.all(
                    sliceOfList.map(async el =>{
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
                ////// save each battle in database
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
                                
                    } catch (e) {
                        next(e);
                    }
                    
                });

                return sliceIndex



                //////  no response must be sent back to frontend since it's not necessary 
                //////  and a warning comes from sending back several response one after another for only one request
                    
                // res
                //     .status(200)
                //     .send(arrOf25PlayersResult);   
            }
            else {
                console.log("in the trigger = false block, return 0")
                sliceIndex = -1
                
                res
                    .status(200)
                    .send({message : "stopped the collection of data"})
            }
            return sliceIndex

        }, 60000, sliceIndex);

        if (clearingValue===-1) clearInterval(clearingValue);

    
    } catch (e) {
        next(e);
    } 

};
