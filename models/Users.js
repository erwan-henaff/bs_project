const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema ({
    id: false,
    tag : {
        $type: String
    },
    name : String,
    nameColor : String,
    trophies : [
        {
            trophies: Number,
            date : {
                $type: Date,
                default: Date.now
            }
        }
    ],
    highestTrophies: Number,
    powerPlayPoints: Number,
    highestPowerPlayPoints: Number,
    expLevel: Number,
    expPoints: Number,
    isQualifiedFromChampionshipChallenge: Boolean,
    '3vs3Victories': Number,
    soloVictories: Number,
    duoVictories: Number,
    bestRoboRumbleTime: Number,
    bestTimeAsBigBrawler: Number,
    club : {
        tag: String,
        name: String
    },
    brawlers : [
        {
            id: Number,
            name: String,
            power: Number,
            rank: Number,
            trophies: Number,
            highestTrophies: Number,
            starPowers: [
                {
                    id : Number,
                    name: String
                }
            ]
        }
    ]
},{ typeKey: '$type' });


module.exports = mongoose.model('User', UserSchema);