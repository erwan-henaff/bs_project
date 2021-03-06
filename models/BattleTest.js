const mongoose = require('mongoose');
const { Schema } = mongoose;

const BattleTestSchema = new Schema ({
    id: false,
    battleTime : {
        $type: String
    },
    event : {
        id: Number,
        mode: String,
        map: String
    },
    battle : {
        mode: String,
        type: String,
        rank: Number,
        result: String,
        duration: Number,
        trophyChange: Number,
        starPlayer: {
            tag: String,
            name: String,
            brawler: {
                id: Number,
                name: String,
                power: Number,
                trophies: Number
            }
        },
        teams: [
            [
                {
                    tag: String,
                    name: String,
                    brawler: {
                        id: Number,
                        name: String,
                        power: Number,
                        trophies: Number
                    }
                }
            ]
        ],
        players: [
            {
                tag: String,
                name: String,
                brawler: {
                    id: Number,
                    name: String,
                    power: Number,
                    trophies: Number
                }
            }
        ],
    },
},{ typeKey: '$type' });


module.exports = mongoose.model('BattleTest', BattleTestSchema);