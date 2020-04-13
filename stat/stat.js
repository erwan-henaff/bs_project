var CronJob = require('cron').CronJob;

const { addBattlesHighRank, startCronUsers, victoryShowdown, cleaning2MonthHighRank, brawlersRanking, modePopularityHighRank, modePopularityHighRank2, modePopularityHighRank3, brawlersPickRate } = require ('./cronFunction');

//// this cronjob adds all battles from 200 best players, twice a day
exports.task001 = new CronJob('0 17 17,20 * * *', addBattlesHighRank, null, true, 'Europe/Berlin');

// exports.task002 = new CronJob('0 4 0 * * *', getCronTimeUser, null, true, 'Europe/Berlin');

exports.task002 = new CronJob('0 57 * * * *', startCronUsers, null, true, 'Europe/Berlin');

exports.task003 = new CronJob('0 5 0 * * *', victoryShowdown, null, true, 'Europe/Berlin');

exports.task004 = new CronJob('0 32 1 * * *', cleaning2MonthHighRank, null, true, 'Europe/Berlin');

exports.task005 = new CronJob('0 33 17 * * *', brawlersRanking, null, true, 'Europe/Berlin');

exports.task006 = new CronJob('0 37 17 * * *', modePopularityHighRank, null, true, 'Europe/Berlin');
exports.task007 = new CronJob('0 39 17 * * *', modePopularityHighRank2, null, true, 'Europe/Berlin');
exports.task008 = new CronJob('0 41 17 * * *', modePopularityHighRank3, null, true, 'Europe/Berlin');

exports.task009 = new CronJob('0 6 3 * * *', brawlersPickRate, null, true, 'Europe/Berlin');






// exports.task003 = new CronJob('0 */1 * * * *', checkArrayCronjobs, null, true, 'Europe/Berlin');



