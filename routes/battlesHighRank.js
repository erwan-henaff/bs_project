var express = require('express');
var router = express.Router();

const { addBattlesHighRank } = require ('../controllers/battlesHighRankController');



router.route('/')
    .post(addBattlesHighRank)



// router
//     .route('/:id')
//     .delete(deleteTodo)
//     .get(getTodo)
//     .put(updateTodo);
    

module.exports = router;