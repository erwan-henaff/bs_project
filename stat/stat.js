var CronJob = require('cron').CronJob;

const { addBattlesHighRank, test003 } = require ('./cronFunction');

//// this cronjob adds all battles from 200 best players, twice a day
exports.task001 = new CronJob('0 0 10,22 * * *', addBattlesHighRank, null, true, 'Europe/Berlin');

exports.task002 = (param) => {
    return new CronJob('0 49 16 * * *', function() {
        console.log(param);
    }, null, true, 'Europe/Berlin');
};
