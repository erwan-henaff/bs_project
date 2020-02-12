var express = require('express');
var router = express.Router();

const { addBattles, getBattles } = require ('../controllers/battlesController');



router.route('/')
    .post(addBattles)
    .get(getBattles);



// router
//     .route('/:id')
//     .delete(deleteTodo)
//     .get(getTodo)
//     .put(updateTodo);
    

module.exports = router;