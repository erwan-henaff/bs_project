const axios = require('axios');
const BattleHighRank = require('../models/BattlesHighRank');
const UserLogin = require('../models/UserLogin');
const User = require('../models/Users');
const Battle = require('../models/Battles');
const PickWin200 = require('../models/PickWin200')

const CronJob = require('cron').CronJob;


let key = require('../env/key');
let appkeyDCI = key.appkeyDCI;
let appkeyHome = key.appkeyHome;

exports.addBattlesHighRank = async () => {

    // from the 200 players, we cut the group in 8 slices of 25.
    // it avoids doing 200 request at once on the server. 
    try {
        console.log("all done 1 ***********************************all done")

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
                        let resQuery = await axios({
                            method: 'GET',  
                            url: url,
                            headers: {
                                "Accept": "application/json",
                                'authorization': Bearer
                            }
                        });
                        resQuery.data.items.forEach(element => {
                            element.playerTag = el;
                        })
                        return resQuery.data.items
                    })
                )
                
                ////// transform the array of 25 battlogs in one array of 25 * 25 battles 
                let arrOf25PlayersResult = listTrunkBattleLog.reduce((acc, curVal)=>{
                    return acc.concat(curVal)
                },[])

                ////// save the battles in database if not already in there
                arrOf25PlayersResult.forEach( async (element, index) => {
                    try {
                        const battle = new BattleHighRank (element);
                        //// here we check for each battle with findOne of mongoose if there is a battle with the battletime 
                        //// return null is none, one object if exist, or error if error
                        const checkBattleExist = await BattleHighRank.findOne({battleTime: battle.battleTime, "event.mode" : battle.event.mode, playerTag: battle.playerTag}, (err, result)=> {
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

            }, 20000*i)
            ///// above the setTimeout function is triggered 20 seconds * i  inside the for loop, 
            ///// so 8 setTimeout or launched
        }   
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

exports.victoryShowdown = async () => {
    // let allBattles200DSD = await BattleHighRank.find({"event.mode" : "duoShowdown"})
    let allBattleUMI = await Battle.find({ "battle.teams" : { "$elemMatch": {"$elemMatch" : { "name" : "umi no tamashi" }}}, "event.mode": "duoShowdown"} );
    let duoVictory = await Battle.find({ "battle.teams" : { "$elemMatch": {"$elemMatch" : { "name" : "umi no tamashi" }}}, "event.mode": "duoShowdown", "battle.rank" : 1 } );
    let duoVictory2 = await Battle.find({ "battle.teams" : { "$elemMatch": {"$elemMatch" : { "name" : "umi no tamashi" }}}, "event.mode": "duoShowdown", "battle.rank" : 2 } );
    console.log("---- duo")
    console.log(allBattleUMI.length);
    console.log(100 * duoVictory.length / allBattleUMI.length);
    console.log(100 * (duoVictory.length + duoVictory2.length) / allBattleUMI.length);


    let allSoloUMI = await Battle.find({ "battle.players.name" : "umi no tamashi" , "event.mode": "soloShowdown"} );
    let allSoloVictoryUMI = await Battle.find({ "battle.players.name" : "umi no tamashi" , "event.mode": "soloShowdown", "battle.rank" :1 } );
    console.log("---- solo")
    console.log(allSoloUMI.length);
    console.log(100 * allSoloVictoryUMI.length / allSoloUMI.length);

}

exports.cleaning2MonthHighRank = async () => {
    
    let oldestBattleDeletion = await BattleHighRank.deleteMany({ "battleTime" : {$regex : /^202004/ } })
    console.log(oldestBattleDeletion.deletedCount);
    // for (let i = 0; i < 9; i++) {
    //     let regex = new RegExp(`^2020030${i}`);
    //     let allBattleOnedayiii = await BattleHighRank.deleteMany({ "battleTime" : {$regex : regex } });
    // }
    // for (let i = 10; i < 15; i++) {
    //     let regex = new RegExp(`^202003${i}`);
    //     let allBattleOnedayiii = await BattleHighRank.deleteMany({ "battleTime" : {$regex : regex } });
    // }

}

exports.cleaningLowLevelHighRank = async () => {
    
    let battleLowLevelDeletion = await BattleHighRank.deleteMany({ 
        "event.mode" : {$ne : "soloShowdown"},
        "event.mode" : {$ne : "duoShowdown"},
        "battle.type" : "ranked" ,
        "battle.teams.0.0.brawler.trophies" :  {$lt: 500 },
        "battle.teams.0.1.brawler.trophies" :  {$lt: 500 },
        "battle.teams.0.2.brawler.trophies" :  {$lt: 500 },
        "battle.teams.1.0.brawler.trophies" :  {$lt: 500 },
        "battle.teams.1.1.brawler.trophies" :  {$lt: 500 },
        "battle.teams.1.2.brawler.trophies" :  {$lt: 500 },
        "battle.trophyChange" : {$lte : 10},
        "battle.teams.0.0.brawler.power" : {$lte : 9},
        "battle.teams.0.1.brawler.power" : {$lte : 9},
        "battle.teams.0.2.brawler.power" : {$lte : 9},
        "battle.teams.1.0.brawler.power" : {$lte : 9},
        "battle.teams.1.1.brawler.power" : {$lte : 9},
        "battle.teams.1.2.brawler.power" : {$lte : 9}
    })
    console.log(battleLowLevelDeletion.deletedCount);

    let battleLowLevelDeletionSD = await BattleHighRank.deleteMany({ 
        "event.mode" : "duoShowdown",
        "battle.type" : "ranked" ,
        "battle.teams.0.0.brawler.trophies" :  {$lt: 500 },
        "battle.teams.0.1.brawler.trophies" :  {$lt: 500 },
        "battle.teams.1.0.brawler.trophies" :  {$lt: 500 },
        "battle.teams.1.1.brawler.trophies" :  {$lt: 500 },
        "battle.teams.2.0.brawler.trophies" :  {$lt: 500 },
        "battle.teams.2.1.brawler.trophies" :  {$lt: 500 },
        "battle.teams.3.0.brawler.trophies" :  {$lt: 500 },
        "battle.teams.3.1.brawler.trophies" :  {$lt: 500 },
        "battle.teams.4.0.brawler.trophies" :  {$lt: 500 },
        "battle.teams.4.1.brawler.trophies" :  {$lt: 500 },
        "battle.trophyChange" : {$lte : 10},
        "battle.teams.0.0.brawler.power" : {$lte : 9},
        "battle.teams.0.1.brawler.power" : {$lte : 9},
        "battle.teams.1.0.brawler.power" : {$lte : 9},
        "battle.teams.1.1.brawler.power" : {$lte : 9},
        "battle.teams.2.0.brawler.power" : {$lte : 9},
        "battle.teams.2.1.brawler.power" : {$lte : 9},
        "battle.teams.3.0.brawler.power" : {$lte : 9},
        "battle.teams.3.1.brawler.power" : {$lte : 9},
        "battle.teams.4.0.brawler.power" : {$lte : 9},
        "battle.teams.4.1.brawler.power" : {$lte : 9},
    })
    console.log(battleLowLevelDeletionSD.deletedCount);

    let battleLowLevelDeletionSDSolo = await BattleHighRank.deleteMany({ 
        "event.mode" : "soloShowdown",
        "battle.type" : "ranked" ,
        "battle.players.0.brawler.trophies" :  {$lt: 500 },
        "battle.players.1.brawler.trophies" :  {$lt: 500 },
        "battle.players.2.brawler.trophies" :  {$lt: 500 },
        "battle.players.3.brawler.trophies" :  {$lt: 500 },
        "battle.players.4.brawler.trophies" :  {$lt: 500 },
        "battle.players.5.brawler.trophies" :  {$lt: 500 },
        "battle.players.6.brawler.trophies" :  {$lt: 500 },
        "battle.players.7.brawler.trophies" :  {$lt: 500 },
        "battle.players.8.brawler.trophies" :  {$lt: 500 },
        "battle.players.9.brawler.trophies" :  {$lt: 500 },
        "battle.trophyChange" : {$lte : 10},
        "battle.players.0.brawler.power" : {$lte : 9},
        "battle.players.1.brawler.power" : {$lte : 9},
        "battle.players.2.brawler.power" : {$lte : 9},
        "battle.players.3.brawler.power" : {$lte : 9},
        "battle.players.4.brawler.power" : {$lte : 9},
        "battle.players.5.brawler.power" : {$lte : 9},
        "battle.players.6.brawler.power" : {$lte : 9},
        "battle.players.7.brawler.power" : {$lte : 9},
        "battle.players.8.brawler.power" : {$lte : 9},
        "battle.players.9.brawler.power" : {$lte : 9},
    })
    console.log(battleLowLevelDeletionSDSolo.deletedCount); 

    let battleFriendly = await BattleHighRank.deleteMany({ 
        "battle.type" : "friendly"
    })
    console.log(battleFriendly.deletedCount);
}

exports.brawlersRanking = async () => {

    try {
        let Bearer = `Bearer ${appkeyHome}`

        let listBrawlers = await axios({
            method: 'GET',  
            url: "https://api.brawlstars.com/v1/brawlers",
            headers: {
                "Accept": "application/json",
                'authorization': Bearer
            }
        })
        listBrawlers = listBrawlers.data.items.map(element => {
            return [element.name, element.id]
        })

        let arrayUrlBrawler = []
        for (let i = 0; i < listBrawlers.length; i++) {
            arrayUrlBrawler.push([`https://api.brawlstars.com/v1/rankings/global/brawlers/${listBrawlers[i][1]}`, listBrawlers[i][0], listBrawlers[i][1]])
        };

        let allBrawlerRanking = await Promise.all(
            arrayUrlBrawler.map(async el => {
                let promise = await axios({
                    method: 'GET',  
                    url: el[0],
                    headers: {
                        "Accept": "application/json",
                        'authorization': Bearer
                    }
                })
                return [el[1], el[2], promise.data.items];
            })     
        );
        
        allBrawlerRanking = allBrawlerRanking.map(element => {
            sumTrophies = element[2].reduce((acc, cur) => {
                acc += cur.trophies
                return acc
            },0 )
            sumPlayerSup1000 = element[2].filter((el)=>{
                return (el.trophies >= 1000 )
            } )        
            return ([element[0], element[1], sumTrophies/200, sumPlayerSup1000.length])
        });
        allBrawlerRanking.sort(function(a, b){return b[2]-a[2]});
        console.log(allBrawlerRanking)
    } catch (e) {
        console.log("error in brawlersRanking cronFunction.js", e)
    }  
}

exports.modePopularityHighRank = async () => {
    try {
        let allBattles200Brawlball = await BattleHighRank.find({"event.mode" : "brawlBall"})
        let allBattles200BrawlballWin = await BattleHighRank.find({
            "event.mode" : "brawlBall",
            "battle.type" : "ranked",
            "battle.result" : "victory"})

        let allBattles200Gemgrab = await BattleHighRank.find({"event.mode" : "gemGrab"})
        let allBattles200GemgrabWin = await BattleHighRank.find({
            "event.mode" : "gemGrab", 
            "battle.type" : "ranked",
            "battle.result" : "victory"})


        console.log (`brawlball ${allBattles200Brawlball.length } --- ${100 * allBattles200BrawlballWin.length / allBattles200Brawlball.length}`)
        console.log (`gemgrab ${allBattles200Gemgrab.length } --- ${100 * allBattles200GemgrabWin.length / allBattles200Gemgrab.length}`)

    }
    catch (e) {
        console.log("error in modepopularityHighRank cornFunction", e);
    }
}

exports.modePopularityHighRank2 = async () => {
    try {
        
        let allBattles200Heist = await BattleHighRank.find({"event.mode" : "heist"})
        let allBattles200HeistWin = await BattleHighRank.find({"event.mode" : "heist", "battle.result" : "victory"})

        let allBattles200Bounty = await BattleHighRank.find({"event.mode" : "bounty"}) 
        let allBattles200BountyWin = await BattleHighRank.find({"event.mode" : "bounty", "battle.result" : "victory"})
 
        let allBattles200Siege = await BattleHighRank.find({"event.mode" : "siege"})
        let allBattles200SiegeWin = await BattleHighRank.find({"event.mode" : "siege", "battle.result" : "victory"})

        console.log (`heist ${allBattles200Heist.length } --- ${100 * allBattles200HeistWin.length / allBattles200Heist.length}`)
        
        console.log (`bounty ${allBattles200Bounty.length } --- ${100 * allBattles200BountyWin.length / allBattles200Bounty.length}`);
        
        console.log (`siege ${allBattles200Siege.length } --- ${100 * allBattles200SiegeWin.length / allBattles200Siege.length}`);
    }
    catch (e) {
        console.log("error in modepopularityHighRank cornFunction", e);
    }
}

exports.modePopularityHighRank3 = async () => {
    try {
        let allBattles200DSD = await BattleHighRank.find({"event.mode" : "duoShowdown"})
        let allBattles200SSD = await BattleHighRank.find({"event.mode" : "soloShowdown"})
        console.log (`solo Showdown ${allBattles200SSD.length }`)
        console.log (`duo Showdown ${allBattles200DSD.length}`)
    }
    catch (e) {
        console.log("error in modepopularityHighRank cornFunction", e);
    }
}

exports.brawlersPickWinRate200duo = async() => {
    try {
        let Bearer = `Bearer ${appkeyHome}`

        let listBrawlers = await axios({
            method: 'GET',  
            url: "https://api.brawlstars.com/v1/brawlers",
            headers: {
                "Accept": "application/json",
                'authorization': Bearer
            }
        });
        listBrawlers = listBrawlers.data.items.map(element => {
            return [element.name, element.id]
        });

        // let arrMode = ["gemGrab", "brawlBall", "heist", "siege"];
        let duoBattle = await BattleHighRank.find({"event.mode" : "duoShowdown", "battle.type" : "ranked"})
        let sumDuo = duoBattle.length;
        duoBattle =[];
        console.log("SUMDUOOOO", sumDuo)

        let arrResult = [];
        for (let i = 0; i < listBrawlers.length; i++) {        
            let pickBrawler = await BattleHighRank.find({
                "event.mode" : "duoShowdown",
                "battle.type" : "ranked" ,
                // "battle.teams" : { "$elemMatch": {"$elemMatch" : { "brawler.name" : "BROCK"}}}
                "battle.teams" : { "$elemMatch": {"$elemMatch" : { "brawler.name" : listBrawlers[i][0]}}}
            })
            if (pickBrawler) {
                pickBrawler = pickBrawler.filter(element => {
                    for (let j = 0; j < 5; j++) {
                        for (let k = 0; k < 2; k++) {
                            if ( (element.battle.teams[j][k].tag.slice(1) === element.playerTag) && (element.battle.teams[j][k].brawler.name === listBrawlers[i][0])) return true
                            // if ( (element.battle.teams[j][k].tag.slice(1) === element.playerTag) && (element.battle.teams[j][k].brawler.name === "BROCK")) return true
                            else continue  
                        }   
                    }
                })
                let winBrawler1 = pickBrawler.filter(element => {
                    return (element.battle.rank === 1)
                });
                let winBrawler2 = pickBrawler.filter(element => {
                    return (element.battle.rank === 2)
                });
                let winBrawler3 = pickBrawler.filter(element => {
                    return (element.battle.rank === 3)
                });
                let winBrawler4 = pickBrawler.filter(element => {
                    return (element.battle.rank === 4)
                });
                let winBrawler5 = pickBrawler.filter(element => {
                    return (element.battle.rank === 5)
                });
                console.log("***************************************************")
                console.log(`${listBrawlers[i][0]}`)
                console.log(` ${pickBrawler.length}`)

                console.log(`pick   ${ 100 * pickBrawler.length / sumDuo}`)
                console.log(`first   ------------------------  ${100 * winBrawler1.length / pickBrawler.length}`)
                console.log(`second   ------------------------  ${100 * winBrawler2.length / pickBrawler.length}`)
                console.log(`third   ------------------------  ${100 * winBrawler3.length / pickBrawler.length}`)
                console.log(`fourth   ------------------------  ${100 * winBrawler4.length / pickBrawler.length}`)
                console.log(`fifth   ------------------------  ${100 * winBrawler5.length / pickBrawler.length}`)
                
                

                console.log(`win   ------------------------  ${100 * (winBrawler1.length + winBrawler2.length) / pickBrawler.length}`)
    
    
                arrResult.push([listBrawlers[i][0] , 100 * pickBrawler.length / sumDuo , 100 * (winBrawler1.length + winBrawler2.length) / pickBrawler.length])
                // arrResult.push(["BROCK" , 100 * pickBrawler.length / sumDuo , 100 * (winBrawler1.length + winBrawler2.length) / pickBrawler.length])
            }
            
        }
        arrResult.sort(function(a, b){return b[2]-a[2]});
        console.log(`:::::::::::::::: DUO SHOWDOWN` )

        console.log(arrResult)
        let d = new Date();
        var months = ["01","02","03","04","05","06","07","08","09","10","11","12"]
        var days = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
        var date2save = days[d.getDate() - 1 ] + months[d.getMonth()];
        let result2save = {
            ranking : arrResult,
            mode: "duoShowdown",
            date : date2save
        }
        const ranking = new PickWin200(result2save);
        await PickWin200.findOneAndDelete({date : ranking.date, mode: ranking.mode})
        await ranking.save();
        console.log(`ranking saved must verify `);

    }
    catch (e) {
        console.log("error in brawlersPickWinRate200duo cronFunctions", e);
    }
}

exports.brawlersPickWinRate200glob = async() => {
    try {
        let Bearer = `Bearer ${appkeyHome}`

        let listBrawlers = await axios({
            method: 'GET',  
            url: "https://api.brawlstars.com/v1/brawlers",
            headers: {
                "Accept": "application/json",
                'authorization': Bearer
            }
        });
        listBrawlers = listBrawlers.data.items.map(element => {
            return [element.name, element.id]
        });

        let no_3vs3Battle = await BattleHighRank.find({
            "event.mode" : "soloShowdown",
            "event.mode" : "duoShowdown", 
            "battle.type" : "ranked"})
        let total = await BattleHighRank.countDocuments({"battle.type" : "ranked"});
        console.log("showdown", no_3vs3Battle.length)
        console.log("total", total)
        console.log(no_3vs3Battle.length * 100 / total)

        let sum3vs3 = total - no_3vs3Battle.length;
        no_3vs3Battle = [];

        let arrResult = [];
        for (let i = 0; i < listBrawlers.length; i++) {
            let pickBrawler1 = []   
            let pickBrawler2 = []        
     
            pickBrawler1 = await BattleHighRank.find({
                // "event.mode" : {$ne : "soloShowdown"},
                // "event.mode" : {$ne : "duoShowdown"},
                "event.mode" : "brawlBall",
                "battle.type" : "ranked" ,
                "battle.teams" : { "$elemMatch": {"$elemMatch" : { "brawler.name" : listBrawlers[i][0]}}}
                // "battle.teams" : { "$elemMatch": {"$elemMatch" : { "brawler.name" : "COLT"}}}

            })
            pickBrawler1 = pickBrawler1.filter(element => {
                for (let j = 0; j < 2; j++) {
                    for (let k = 0; k < 3; k++) {
                        if ( (element.battle.teams[j][k].tag.slice(1) === element.playerTag) && (element.battle.teams[j][k].brawler.name === listBrawlers[i][0])) return true
                        // if ( (element.battle.teams[j][k].tag.slice(1) === element.playerTag) && (element.battle.teams[j][k].brawler.name === "COLT")) return true

                        else continue  
                    }   
                }
            })
            let winBrawler1 = pickBrawler1.filter(element => {
                return (element.battle.result === "victory")
            });

            let pickBrawler = pickBrawler1.length
            let winBrawler = winBrawler1.length
        
            /// I cut the process in 2 asynchronous queries because of memory capacity 
            pickBrawler1 = [];

            pickBrawler1 = await BattleHighRank.find({
                
                "event.mode" : {$in : ["siege", "heist", "gemGrab", "bounty"]},
                "battle.type" : "ranked" ,
                "battle.teams" : { "$elemMatch": {"$elemMatch" : { "brawler.name" : listBrawlers[i][0]}}}
                // "battle.teams" : { "$elemMatch": {"$elemMatch" : { "brawler.name" : "COLT"}}}

            })

            
            pickBrawler1 = pickBrawler1.filter(element => {
                for (let j = 0; j < 2; j++) {
                    for (let k = 0; k < 3; k++) {
                        if ( (element.battle.teams[j][k].tag.slice(1) === element.playerTag) && (element.battle.teams[j][k].brawler.name === listBrawlers[i][0])) return true
                        // if ( (element.battle.teams[j][k].tag.slice(1) === element.playerTag) && (element.battle.teams[j][k].brawler.name === "COLT")) return true

                        else continue  
                    }   
                }
            })
            
            let winBrawler2 = pickBrawler1.filter(element => {
                return (element.battle.result === "victory")
            });
            pickBrawler += pickBrawler1.length
            winBrawler += winBrawler2.length

            console.log("***************************************************")
            console.log(`${listBrawlers[i][0]}`)
            console.log(`${pickBrawler}`)
            console.log(`pick   ${ 100 * pickBrawler / sum3vs3}`)
            console.log(`win   ------------------------  ${100 * winBrawler / pickBrawler}`)

            arrResult.push([listBrawlers[i][0] , pickBrawler ? 100 * pickBrawler / sum3vs3 : 0, pickBrawler ? 100 * winBrawler / pickBrawler : 0])
        }
        arrResult.sort(function(a, b){return b[2]-a[2]});
        console.log(`:::::::::::::::: GLOBAL 3VS3` )
        console.log(arrResult)
        let d = new Date();
        var months = ["01","02","03","04","05","06","07","08","09","10","11","12"]
        var days = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
        var date2save = days[d.getDate() - 1 ] + months[d.getMonth()];
        let result2save = {
            ranking : arrResult,
            mode: "global",
            date : date2save
        }
        const ranking = new PickWin200(result2save);
        await PickWin200.findOneAndDelete({date : ranking.date, mode: ranking.mode})
        await ranking.save();
        console.log(`ranking saved must verify `);

    }
    catch (e) {
        console.log("error in brawlersPickWinRate200glob cronFunctions", e);
    }
}

let pickWin200Param = async (param) => {
    console.log(`:::::::::::::::: ${param}` )

    try {
        let Bearer = `Bearer ${appkeyHome}`

        let listBrawlers = await axios({
            method: 'GET',  
            url: "https://api.brawlstars.com/v1/brawlers",
            headers: {
                "Accept": "application/json",
                'authorization': Bearer
            }
        });
        listBrawlers = listBrawlers.data.items.map(element => {
            return [element.name, element.id]
        });

        // let arrMode = ["gemGrab", "brawlBall", "heist", "siege"];
        let battleTotal = await BattleHighRank.find({"event.mode" : param, "battle.type" : "ranked"})
        let sumBattle = battleTotal.length;
        battleTotal =[];

        let arrResult = [];
        for (let i = 0; i < listBrawlers.length; i++) {  
            let pickBrawler = [];      
            pickBrawler = await BattleHighRank.find({
                "event.mode" : param,
                "battle.type" : "ranked" ,
                "battle.teams" : { "$elemMatch": {"$elemMatch" : { "brawler.name" : listBrawlers[i][0]}}}
            })

            pickBrawler = pickBrawler.filter(element => {
                for (let j = 0; j < 2; j++) {
                    for (let k = 0; k < 3; k++) {
                        if ( (element.battle.teams[j][k].tag.slice(1) === element.playerTag) && (element.battle.teams[j][k].brawler.name === listBrawlers[i][0])) return true
                        else continue  
                    }   
                }
            })
            let winBrawler = pickBrawler.filter(element => {
                return (element.battle.result === "victory")
            });
            console.log("***************************************************")
            console.log(`${listBrawlers[i][0]}`)
            console.log(`${pickBrawler.length}`)

            console.log(`pick   ${ 100 * pickBrawler.length / sumBattle}`)
            console.log(`win   ------------------------  ${100 * winBrawler.length / pickBrawler.length}`)

            arrResult.push([listBrawlers[i][0] , pickBrawler.length ? 100 * pickBrawler.length / sumBattle : 0, pickBrawler.length ? 100 *  winBrawler.length / pickBrawler.length : 0 ])
        }
        arrResult.sort(function(a, b){return b[2]-a[2]});
        console.log(`:::::::::::::::: ${param}` )
        console.log(arrResult)
        let d = new Date();
        var months = ["01","02","03","04","05","06","07","08","09","10","11","12"]
        var days = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
        var date2save = days[d.getDate() - 1 ] + months[d.getMonth()];
        let result2save = {
            ranking : arrResult,
            mode: param,
            date : date2save
        }
        const ranking = new PickWin200(result2save);
        await PickWin200.findOneAndDelete({date : ranking.date, mode: ranking.mode})
        await ranking.save();
        console.log(`ranking saved must verify `);

    }
    catch (e) {
        console.log("error in brawlersPickWinRate200glob cronFunctions", e);
    }
}

exports.brawlersPickWinRate200gemGrab = async() => {
    pickWin200Param("gemGrab")
}

exports.brawlersPickWinRate200siege = async() => {
    pickWin200Param("siege")
}

exports.brawlersPickWinRate200heist = async() => {
    pickWin200Param("heist")
}

exports.brawlersPickWinRate200bounty = async() => {
    pickWin200Param("bounty")
}

exports.brawlersPickWinRate200brawlBall = async() => {
    pickWin200Param("brawlBall")
}

exports.brawlerRanking_200BestPlayers = async () => {

    // from the 200 players, we cut the group in 8 slices of 25.
    // it avoids doing 200 request at once on the server. 
    try {

        let whichKey = "appkeyHome"  
        let Bearer = "";
        if (whichKey=== "appkeyDCI") Bearer = `Bearer ${appkeyDCI}`
        else if (whichKey=== "appkeyHome") Bearer = `Bearer ${appkeyHome}`

        let url = "https://api.brawlstars.com/v1/rankings/global/players";

        const getListBestPlayers = await axios({
            method: 'GET',  
            url: url,
            headers: {
                "Accept": "application/json",
                'authorization': Bearer
            }
        });
        ////////////////// extract the player tags into an array 
        getListBestPlayers1 = getListBestPlayers.data.items.map(el => {
            return el.tag.slice(1);
        })

        let allInfos200Player = [];
        let listTrunk = [];
        
        for (let i = 0; i < 8; i++) {
            listTrunk[i] = getListBestPlayers1.slice(i*25, (i+1)*25)    
        
            setTimeout( async () => {

                let listTrunkPlayerInfo = await Promise.all(
                    // listTrunk[i].map(async el =>{
                    listTrunk[i].map(async el =>{

                        let url = `https://api.brawlstars.com/v1/players/%23${el}`;
                        let resQuery = await axios({
                            method: 'GET',  
                            url: url,
                            headers: {
                                "Accept": "application/json",
                                'authorization': Bearer
                            }
                        });
                        return resQuery.data
                    })
                )
                allInfos200Player = allInfos200Player.concat(listTrunkPlayerInfo)
            }, 10000*i)
        } 
        //// this function is postponed to be executed after all APIs call.
        setTimeout ( async ()=>{
            console.log(" OWARIIIII   --------------------------")
            console.log(allInfos200Player.length)
            let arrAverageBrawler = [];

            let numberOfBrawlers = allInfos200Player[0].brawlers.length;

            for (let index1 = 0; index1 < numberOfBrawlers; index1++) {
                let sumTrophies = allInfos200Player.reduce( (acc,cur) => {
                    if( cur.brawlers[index1]) {
                        acc.value += cur.brawlers[index1].trophies
                        acc.count ++
                        acc.name = cur.brawlers[index1].name
                    }                   
                    return acc
                }, { value:0, count:0, name: "" })
                arrAverageBrawler.push([ sumTrophies.name,  sumTrophies.value/sumTrophies.count, 0])    
            }
            arrAverageBrawler.sort(function(a, b){return b[1]-a[1]});
            console.log(arrAverageBrawler)

            let d = new Date();
            const months = ["01","02","03","04","05","06","07","08","09","10","11","12"]
            const days = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
            const date2save = days[d.getDate() - 1 ] + months[d.getMonth()];
            const result2save = {
                ranking : arrAverageBrawler,
                mode: "brawler average 200 Best",
                date : date2save
            }
            const ranking = new PickWin200(result2save);
            await PickWin200.findOneAndDelete({date : ranking.date, mode: ranking.mode})
            await ranking.save();
            console.log(`average saved must verify `);
                
        },180000)

        
    } catch (e) {
        console.log("error occured in battlehighrank cronfunction call (api-key?)", e)
    }
};