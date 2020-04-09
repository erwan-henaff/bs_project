var CronJob = require('cron').CronJob;

const { addBattlesHighRank, startCronUsers, popularity, cleaning2MonthHighRank } = require ('./cronFunction');

//// this cronjob adds all battles from 200 best players, twice a day
exports.task001 = new CronJob('0 0 14,20 * * *', addBattlesHighRank, null, true, 'Europe/Berlin');

// exports.task002 = new CronJob('0 4 0 * * *', getCronTimeUser, null, true, 'Europe/Berlin');

exports.task002 = new CronJob('0 57 * * * *', startCronUsers, null, true, 'Europe/Berlin');

exports.task003 = new CronJob('0 5 * * * *', popularity, null, true, 'Europe/Berlin');

exports.task004 = new CronJob('0 37 14 * * *', cleaning2MonthHighRank, null, true, 'Europe/Berlin');



// exports.task003 = new CronJob('0 */1 * * * *', checkArrayCronjobs, null, true, 'Europe/Berlin');



