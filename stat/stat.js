var CronJob = require('cron').CronJob;

const { addBattlesHighRank, startCronUsers, checkArrayCronjobs } = require ('./cronFunction');

//// this cronjob adds all battles from 200 best players, twice a day
exports.task001 = new CronJob('0 0 11,23 * * *', addBattlesHighRank, null, true, 'Europe/Berlin');

// exports.task002 = new CronJob('0 4 0 * * *', getCronTimeUser, null, true, 'Europe/Berlin');

exports.task002 = new CronJob('0 */3 * * * *', startCronUsers, null, true, 'Europe/Berlin');

// exports.task003 = new CronJob('0 */1 * * * *', checkArrayCronjobs, null, true, 'Europe/Berlin');



