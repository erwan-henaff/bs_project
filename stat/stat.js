var CronJob = require('cron').CronJob;

const { addBattlesHighRank, startCronUsers, victoryShowdown, cleaning2MonthHighRank, brawlersRanking, modePopularityHighRank, modePopularityHighRank2, modePopularityHighRank3, brawlersPickWinRate200glob, brawlersPickWinRate200duo, brawlersPickWinRate200gemGrab, brawlersPickWinRate200heist, brawlersPickWinRate200bounty, brawlersPickWinRate200siege, brawlersPickWinRate200brawlBall, cleaningLowLevelHighRank } = require ('./cronFunction');

//// this cronjob adds all battles from 200 best players, twice a day
exports.task001 = new CronJob('0 35 12,0 * * *', addBattlesHighRank, null, true, 'Europe/Berlin');
exports.task002 = new CronJob('0 57 0 * * *', startCronUsers, null, true, 'Europe/Berlin');
exports.task003 = new CronJob('0 52 21 * * *', victoryShowdown, null, true, 'Europe/Berlin');
exports.task004 = new CronJob('0 9 21 1 * *', cleaning2MonthHighRank, null, true, 'Europe/Berlin');
exports.task004b = new CronJob('0 35 15 * * *', cleaningLowLevelHighRank, null, true, 'Europe/Berlin');

exports.task005 = new CronJob('0 39 12 * * *', brawlersRanking, null, true, 'Europe/Berlin');

exports.task006 = new CronJob('0 21 21 * * *', modePopularityHighRank, null, true, 'Europe/Berlin');
exports.task007 = new CronJob('0 23 21 * * *', modePopularityHighRank2, null, true, 'Europe/Berlin');
exports.task008 = new CronJob('0 25 21 * * *', modePopularityHighRank3, null, true, 'Europe/Berlin');

exports.task009 = new CronJob('0 40 12 * * *', brawlersPickWinRate200glob, null, true, 'Europe/Berlin');
exports.task010 = new CronJob('0 52 12 * * *', brawlersPickWinRate200duo, null, true, 'Europe/Berlin');
exports.task011 = new CronJob('0 44 12 * * *', brawlersPickWinRate200gemGrab, null, true, 'Europe/Berlin');
exports.task012 = new CronJob('0 46 12 * * *', brawlersPickWinRate200heist, null, true, 'Europe/Berlin');
exports.task013 = new CronJob('0 48 12 * * *', brawlersPickWinRate200bounty, null, true, 'Europe/Berlin');
exports.task014 = new CronJob('0 50 12 * * *', brawlersPickWinRate200siege, null, true, 'Europe/Berlin');
exports.task015 = new CronJob('0 42 12 * * *', brawlersPickWinRate200brawlBall, null, true, 'Europe/Berlin');




// exports.task003 = new CronJob('0 */1 * * * *', checkArrayCronjobs, null, true, 'Europe/Berlin');



