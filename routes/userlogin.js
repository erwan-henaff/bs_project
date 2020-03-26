var express = require('express');
var router = express.Router();

const { userLogin } = require ('../controllers/userLoginController');



router.route('/signup')
    .post(userLogin)
    // .get(getBattles);



// router
//     .route('/:id')
//     .delete(deleteTodo)
//     .get(getTodo)
//     .put(updateTodo);
    

module.exports = router;