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
            const battle = new Battle (element);

            //// here we check for each battle with findOne of mongoose if there is a battle with the battletime 
            //// return null is none, one object if exist, or error if error

            const checkBattleExist = await Battle.findOne({battleTime: battle.battleTime}, (err, result)=> {
                if (err) {
                    console.log("I'm in checkBattleExist error")
                    return err
                }
                else {
                    console.log("I'm in checkBattleExist");
                    return result
                }
            });
            
            if (checkBattleExist === null) {
                await battle.save();
                console.log(`${index} battle among 25 from #9RGYGP20P  battle_log have been added`);
                res
                    .status(200)
                    .send(battle);
            }
            else {
                res.
                    status(200)
                    .send({message: "battles are already in it"})
            }
        });

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



// {
//     "battleTime": "20200210T073005.000Z",
//     "event": {
//       "id": 15000229,
//       "mode": "duoShowdown",
//       "map": "Safety Center"
//     },
//     "battle": {
//       "mode": "duoShowdown",
//       "type": "ranked",
//       "rank": 1,
//       "trophyChange": 9,
//       "teams": [
//         [
//           {
//             "tag": "#9RGYGP20P",
//             "name": "umi no tamashi",
//             "brawler": {
//               "id": 16000012,
//               "name": "CROW",
//               "power": 2,
//               "trophies": 494
//             }
//           },
//           {
//             "tag": "#22JPR98PC",
//             "name": "BRODEMID",
//             "brawler": {
//               "id": 16000000,
//               "name": "SHELLY",
//               "power": 7,
//               "trophies": 523
//             }
//           }
//         ],
//         [
//           {
//             "tag": "#2YJL9RYYY",
//             "name": "qq.",
//             "brawler": {
//               "id": 16000013,
//               "name": "POCO",
//               "power": 8,
//               "trophies": 454
//             }
//           },
//           {
//             "tag": "#8PGGY82GV",
//             "name": "DimonLimon281",
//             "brawler": {
//               "id": 16000005,
//               "name": "SPIKE",
//               "power": 6,
//               "trophies": 473
//             }
//           }
//         ],
//         [
//           {
//             "tag": "#QC92UYCJ",
//             "name": "MD",
//             "brawler": {
//               "id": 16000012,
//               "name": "CROW",
//               "power": 10,
//               "trophies": 538
//             }
//           },
//           {
//             "tag": "#JQCYJG9",
//             "name": "leo",
//             "brawler": {
//               "id": 16000023,
//               "name": "LEON",
//               "power": 2,
//               "trophies": 92
//             }
//           }
//         ],
//         [
//           {
//             "tag": "#YJY990YR",
//             "name": "35_IZMIRLI_35",
//             "brawler": {
//               "id": 16000005,
//               "name": "SPIKE",
//               "power": 8,
//               "trophies": 494
//             }
//           },
//           {
//             "tag": "#PYYL9PCRR",
//             "name": "sopli deda",
//             "brawler": {
//               "id": 16000029,
//               "name": "BEA",
//               "power": 6,
//               "trophies": 494
//             }
//           
//         ],
//         [
//           {
//             "tag": "#CUYPCCC0",
//             "name": "Super _Star",
//             "brawler": {
//               "id": 16000010,
//               "name": "EL PRIMO",
//               "power": 5,
//               "trophies": 278
//             }
//           },
//           {
//             "tag": "#PQVR20CJ",
//             "name": "СоЛнЫшКо",
//             "brawler": {
//               "id": 16000002,
//               "name": "BULL",
//               "power": 7,
//               "trophies": 484
//             }
//           }
//         ]
//       ]
//     }
//   }



// {
// 	"items":[
// 		{
// 		    "battleTime": "20200210T073005.000Z",
// 		    "event": {
// 		      "id": 15000229,
// 		      "mode": "duoShowdown",
// 		      "map": "Safety Center"
// 		    },
// 		    "battle": {
		    	
// 		      "type": "ranked",
// 		      "rank": 1,
// 		      "trophyChange": 9,
// 		      "teams": [
// 		        [
// 		          {
// 		            "tag": "#9RGYGP20P",
// 		            "name": "umi no tamashi",
// 		            "brawler": {
// 		              "id": 16000012,
// 		              "name": "CROW",
// 		              "power": 2,
// 		              "trophies": 494
// 		            }
// 		          },
// 		          {
// 		            "tag": "#22JPR98PC",
// 		            "name": "BRODEMID",
// 		            "brawler": {
// 		              "id": 16000000,
// 		              "name": "SHELLY",
// 		              "power": 7,
// 		              "trophies": 523
// 		            }
// 		          }
// 		        ],
// 		        [
// 		          {
// 		            "tag": "#2YJL9RYYY",
// 		            "name": "qq.",
// 		            "brawler": {
// 		              "id": 16000013,
// 		              "name": "POCO",
// 		              "power": 8,
// 		              "trophies": 454
// 		            }
// 		          },
// 		          {
// 		            "tag": "#8PGGY82GV",
// 		            "name": "DimonLimon281",
// 		            "brawler": {
// 		              "id": 16000005,
// 		              "name": "SPIKE",
// 		              "power": 6,
// 		              "trophies": 473
// 		            }
// 		          }
// 		        ],
// 		        [
// 		          {
// 		            "tag": "#QC92UYCJ",
// 		            "name": "MD",
// 		            "brawler": {
// 		              "id": 16000012,
// 		              "name": "CROW",
// 		              "power": 10,
// 		              "trophies": 538
// 		            }
// 		          },
// 		          {
// 		            "tag": "#JQCYJG9",
// 		            "name": "leo",
// 		            "brawler": {
// 		              "id": 16000023,
// 		              "name": "LEON",
// 		              "power": 2,
// 		              "trophies": 92
// 		            }
// 		          }
// 		        ],
// 		        [
// 		          {
// 		            "tag": "#YJY990YR",
// 		            "name": "35_IZMIRLI_35",
// 		            "brawler": {
// 		              "id": 16000005,
// 		              "name": "SPIKE",
// 		              "power": 8,
// 		              "trophies": 494
// 		            }
// 		          },
// 		          {
// 		            "tag": "#PYYL9PCRR",
// 		            "name": "sopli deda",
// 		            "brawler": {
// 		              "id": 16000029,
// 		              "name": "BEA",
// 		              "power": 6,
// 		              "trophies": 494
// 		            }
// 		          }
// 		        ],
// 		        [
// 		          {
// 		            "tag": "#CUYPCCC0",
// 		            "name": "Super _Star",
// 		            "brawler": {
// 		              "id": 16000010,
// 		              "name": "EL PRIMO",
// 		              "power": 5,
// 		              "trophies": 278
// 		            }
// 		          },
// 		          {
// 		            "tag": "#PQVR20CJ",
// 		            "name": "СоЛнЫшКо",
// 		            "brawler": {
// 		              "id": 16000002,
// 		              "name": "BULL",
// 		              "power": 7,
// 		              "trophies": 484
// 		            }
// 		          }
// 		        ]
// 		      ]
// 		    }
// 		}
// 	]
//   }