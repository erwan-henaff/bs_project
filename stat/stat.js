var CronJob = require('cron').CronJob;

const { addBattlesHighRank, getCronTimeUser, addUserDataCron } = require ('./cronFunction');

//// this cronjob adds all battles from 200 best players, twice a day
exports.task001 = new CronJob('0 0 11,23 * * *', addBattlesHighRank, null, true, 'Europe/Berlin');

// exports.task002 = new CronJob('0 4 0 * * *', getCronTimeUser, null, true, 'Europe/Berlin');

exports.task003 = async () => {

    try {
        let param = await getCronTimeUser();
        let taskArray = [];
        param.forEach(element => {
            let callFunction = () => {
                return addUserDataCron(element.tag)
            }
            for (let i = 0; i < element.cronJobs.length; i++) {
                taskArray.push( new CronJob(`0 0 ${element.cronJobs[i]} * * *`, callFunction, null, true, 'Europe/Berlin'));
            }
            
        });
        for (let i = 0; i < taskArray.length; i++) {
            taskArray[i].start();      
            console.log(taskArray[i])
        }
    } catch (e) {
        next(e)
    }
    
};


