var express = require('express');
var router = express.Router();

const { addBattleTest } = require ('../controllers/battleTestController');



router.route('/')
    .post(addBattleTest)

    

module.exports = router;