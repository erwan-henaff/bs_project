var CronJob = require('cron').CronJob;

const { addBattlesHighRank, startCronUsers, popularity, cleaning2MonthHighRank, brawlersRanking } = require ('./cronFunction');

//// this cronjob adds all battles from 200 best players, twice a day
exports.task001 = new CronJob('0 46 13,20 * * *', addBattlesHighRank, null, true, 'Europe/Berlin');

// exports.task002 = new CronJob('0 4 0 * * *', getCronTimeUser, null, true, 'Europe/Berlin');

exports.task002 = new CronJob('0 57 * * * *', startCronUsers, null, true, 'Europe/Berlin');

exports.task003 = new CronJob('0 5 0 * * *', popularity, null, true, 'Europe/Berlin');

exports.task004 = new CronJob('0 0 14 1 * *', cleaning2MonthHighRank, null, true, 'Europe/Berlin');

exports.task005 = new CronJob('0 52 15 * * *', brawlersRanking, null, true, 'Europe/Berlin');




// exports.task003 = new CronJob('0 */1 * * * *', checkArrayCronjobs, null, true, 'Europe/Berlin');



