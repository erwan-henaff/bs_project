var express = require('express');
var router = express.Router();

const { addBattleTest } = require ('../controllers/battleTestController');



router.route('/')
    .post(addBattleTest)



// router
//     .route('/:id')
//     .delete(deleteTodo)
//     .get(getTodo)
//     .put(updateTodo);
    

module.exports = router;