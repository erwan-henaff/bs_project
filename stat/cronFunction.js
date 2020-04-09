const axios = require('axios');
const BattleHighRank = require('../models/BattlesHighRank');
const UserLogin = require('../models/UserLogin');
const User = require('../models/Users');
const Battle = require('../models/Battles');

const CronJob = require('cron').CronJob;


let key = require('../env/key');
let appkeyDCI = key.appkeyDCI;
let appkeyHome = key.appkeyHome;

exports.addBattlesHighRank = async () => {

    // from the 200 players, we cut the group in 8 slices of 25.
    // it avoids doing 200 request at once on the server. 
    try {
        let whichKey = "appkeyHome"  
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
        /////// cut the array in 8 smaller arrays to avoid too many api calls at once
        let listTrunk = [];
        for (let i = 0; i < 8; i++) {
            listTrunk[i] = getListBestPlayers1.slice(i*25, (i+1)*25)  
        
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
                        const checkBattleExist = await BattleHighRank.findOne({battleTime: battle.battleTime, "event.mode" : battle.event.mode}, (err, result)=> {
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
                        console.log(`error while saving battlesHighRanks ${e}`)
                    }
                    
                });
                console.log(`************inside the ${i} setTimeout loop trigger = true `)

            }, 10000*i)
            ///// above the setTimeout function is triggered 10 seconds * i  inside the for loop, 
            ///// so 8 setTimeout or launched
        }   
        console.log("all done ***********************************all done")
    } catch (e) {
        console.log("error occured in battlehighrank cronfunction call (api-key?)")
    }
};




let addUserDataCron = async (playerTag) => {

    try {
        let whichKey = "appkeyHome";
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
                    console.log(`${index} battle is already in the database`);
                }                        
            } catch (e) {
                console.log(`error in the addUserDataCron : ${e}`)
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
    } catch (e) {
        console.log("adduserdatacon", e)
    } 
};

let taskArray = [];

let  getCronTimeUser = async () => {
    try {
        const usersTime = await UserLogin.find()
            .select('cronJobs tag -_id');
            
        let newUsersTime = usersTime.filter(function (value) {
            return ((value.cronJobs.length >= 1) && (value.tag))
        })
        return newUsersTime;
    } catch (e) {
        console.log("error in getCronTimeUser line 313, cronFunction.js", e)
    }
}

exports.startCronUsers = async () => {
    for (let i = 0; i < taskArray.length; i++) {
        taskArray[i].stop();           
    }
    try {
        let param = await getCronTimeUser();
        taskArray = [];
        param.forEach(element => {
            let callFunction = () => {
                return addUserDataCron(element.tag)
            }
            for (let i = 0; i < element.cronJobs.length; i++) {
                taskArray.push( new CronJob(`0 0 ${element.cronJobs[i]} * * *`, callFunction, null, true, 'Europe/Berlin'));
            }
        });
        for (let i = 0; i < taskArray.length; i++) {
            taskArray[i].start();      
        }
        console.log(taskArray)
    } catch (e) {
        console.log(e)
    } 
};

///////// popularity 200 best 

exports.popularity = async () => {
    // let allBattles200DSD = await BattleHighRank.find({"event.mode" : "duoShowdown"})
    // let allBattleUmiTeam1 = await Battle.find({ "battle.teams.0.name": "umi no tamashi", "event.mode": "duoShowdown"})
    // let allBattleUmiTeam2 = await Battle.find({ "battle.teams.1.name": "umi no tamashi", "event.mode": "duoShowdown" })
    // let allBattleUmiTeam3 = await Battle.find({ "battle.teams.2.name": "umi no tamashi", "event.mode": "duoShowdown" })
    // let allBattleUmiTeam4 = await Battle.find({ "battle.teams.3.name": "umi no tamashi", "event.mode": "duoShowdown" })
    // let allBattleUmiTeam5 = await Battle.find({ "battle.teams.4.name": "umi no tamashi", "event.mode": "duoShowdown" })

    let allBattleUMI = await Battle.find({ "battle.teams" : { "$elemMatch": {"$elemMatch" : { "name" : "umi no tamashi" }}}, "event.mode": "duoShowdown"} );
    let duoVictory = await Battle.find({ "battle.teams" : { "$elemMatch": {"$elemMatch" : { "name" : "umi no tamashi" }}}, "event.mode": "duoShowdown", "battle.rank" : 1 } );

    

    // let allBattles200BB = await BattleHighRank.find({"event.mode" : "brawlBall"})
    // let allBattles200Siege = await BattleHighRank.find({"event.mode" : "siege"})
    
    console.log(allBattleUMI.length);
    console.log(duoVictory.length);



}

