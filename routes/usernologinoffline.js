var express = require('express');
var router = express.Router();

const { addUserNoLoginOffline } = require ('../controllers/userNoLoginOfflineController');



router.route('/')
    .post(addUserNoLoginOffline)
    // .get(getBattles);



// router
//     .route('/:id')
//     .delete(deleteTodo)
//     .get(getTodo)
//     .put(updateTodo);
    

module.exports = router;