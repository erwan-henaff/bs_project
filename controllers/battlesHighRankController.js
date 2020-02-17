const createError = require('http-errors');

const axios = require('axios');

const BattleHighRank = require('../models/BattlesHighRank');

let key = require('../env/key');
let appkeyDCI = key.appkeyDCI;
let appkeyHome = key.appkeyHome;

let sliceIndex = 0;



exports.addBattlesHighRank = async (req,res,next) => {

    // sliceindex will come from the post request and give wich battlelogs of the 200 best players we will require
    // from the 200 players, we cut the group in 8 slices of 25.
    // it avoids doing 200 request at once on the server. 

    if (req.body.slice || req.body.slice === 0) sliceIndex= req.body.slice;

    console.log(sliceIndex);


    try {

        let whichKey = req.body.whichKey;

        let Bearer = "";

        if (whichKey=== "appkeyDCI") Bearer = `Bearer ${appkeyDCI}`
        else if (whichKey=== "appkeyHome") Bearer = `Bearer ${appkeyHome}`

        let url = "https://api.brawlstars.com/v1/rankings/global/players";

        //////////////////////////////////////////////////////////////////////////////////////////
        //////////// get the list of best world player from API, it's an object with "items" key being an array

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

        let listTrunk = [];
        for (let i = 0; i < 8; i++) {
            listTrunk[i] = getListBestPlayers1.slice(i*25, (i+1)*25)  
        }

        let sliceOfList = listTrunk[sliceIndex];

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

        let arrOf25PlayersResult = listTrunkBattleLogItems.reduce((acc, curVal)=>{
            return acc.concat(curVal)
        },[])

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


            
        res
            .status(200)
            .send(arrOf25PlayersResult);   


    
    } catch (e) {
        next(e);
    } 
};
