var CronJob = require('cron').CronJob;

const { addBattlesHighRank, startCronUsers, victoryShowdown, cleaning2MonthHighRank, brawlersRanking, modePopularityHighRank, modePopularityHighRank2, modePopularityHighRank3, brawlersPickWinRate200glob, brawlersPickWinRate200duo } = require ('./cronFunction');

//// this cronjob adds all battles from 200 best players, twice a day
exports.task001 = new CronJob('0 27 14,1 * * *', addBattlesHighRank, null, true, 'Europe/Berlin');

// exports.task002 = new CronJob('0 4 0 * * *', getCronTimeUser, null, true, 'Europe/Berlin');

exports.task002 = new CronJob('0 57 * * * *', startCronUsers, null, true, 'Europe/Berlin');

exports.task003 = new CronJob('0 5 0 * * *', victoryShowdown, null, true, 'Europe/Berlin');

exports.task004 = new CronJob('0 9 21 1 * *', cleaning2MonthHighRank, null, true, 'Europe/Berlin');

exports.task005 = new CronJob('0 30 23 * * *', brawlersRanking, null, true, 'Europe/Berlin');

exports.task006 = new CronJob('0 21 21 * * *', modePopularityHighRank, null, true, 'Europe/Berlin');
exports.task007 = new CronJob('0 23 21 * * *', modePopularityHighRank2, null, true, 'Europe/Berlin');
exports.task008 = new CronJob('0 25 21 * * *', modePopularityHighRank3, null, true, 'Europe/Berlin');

exports.task009 = new CronJob('0 35 14 * * *', brawlersPickWinRate200glob, null, true, 'Europe/Berlin');

exports.task010 = new CronJob('0 51 15 * * *', brawlersPickWinRate200duo, null, true, 'Europe/Berlin');




// exports.task003 = new CronJob('0 */1 * * * *', checkArrayCronjobs, null, true, 'Europe/Berlin');



