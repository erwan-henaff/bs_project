var express = require('express');
var router = express.Router();

const { addUserNoLogin } = require ('../controllers/userNoLoginController');



router.route('/')
    .post(addUserNoLogin)
    // .get(getBattles);



// router
//     .route('/:id')
//     .delete(deleteTodo)
//     .get(getTodo)
//     .put(updateTodo);
    

module.exports = router;