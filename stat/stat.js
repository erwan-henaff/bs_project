var CronJob = require('cron').CronJob;

const { addBattlesHighRank, startCronUsers, victoryShowdown, cleaning2MonthHighRank, brawlersRanking, modePopularityHighRank, modePopularityHighRank2, modePopularityHighRank3, brawlersPickWinRate200glob, brawlersPickWinRate200duo, brawlersPickWinRate200gemGrab, brawlersPickWinRate200heist, brawlersPickWinRate200bounty, brawlersPickWinRate200siege } = require ('./cronFunction');

//// this cronjob adds all battles from 200 best players, twice a day
exports.task001 = new CronJob('0 14 14,21 * * *', addBattlesHighRank, null, true, 'Europe/Berlin');

// exports.task002 = new CronJob('0 4 0 * * *', getCronTimeUser, null, true, 'Europe/Berlin');

exports.task002 = new CronJob('0 57 * * * *', startCronUsers, null, true, 'Europe/Berlin');

exports.task003 = new CronJob('0 52 21 * * *', victoryShowdown, null, true, 'Europe/Berlin');

exports.task004 = new CronJob('0 9 21 1 * *', cleaning2MonthHighRank, null, true, 'Europe/Berlin');

exports.task005 = new CronJob('0 42 21 * * *', brawlersRanking, null, true, 'Europe/Berlin');

exports.task006 = new CronJob('0 21 21 * * *', modePopularityHighRank, null, true, 'Europe/Berlin');
exports.task007 = new CronJob('0 23 21 * * *', modePopularityHighRank2, null, true, 'Europe/Berlin');
exports.task008 = new CronJob('0 25 21 * * *', modePopularityHighRank3, null, true, 'Europe/Berlin');

exports.task009 = new CronJob('0 39 21 * * *', brawlersPickWinRate200glob, null, true, 'Europe/Berlin');

exports.task010 = new CronJob('0 36 21 * * *', brawlersPickWinRate200duo, null, true, 'Europe/Berlin');

exports.task011 = new CronJob('0 33 21 * * *', brawlersPickWinRate200gemGrab, null, true, 'Europe/Berlin');
exports.task012 = new CronJob('0 58 21 * * *', brawlersPickWinRate200heist, null, true, 'Europe/Berlin');
exports.task013 = new CronJob('0 01 22 * * *', brawlersPickWinRate200bounty, null, true, 'Europe/Berlin');
exports.task014 = new CronJob('0 04 22 * * *', brawlersPickWinRate200siege, null, true, 'Europe/Berlin');




// exports.task003 = new CronJob('0 */1 * * * *', checkArrayCronjobs, null, true, 'Europe/Berlin');



