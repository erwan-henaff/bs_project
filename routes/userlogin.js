var express = require('express');
var router = express.Router();

const { userSignup, userLogin } = require ('../controllers/userLoginController');


router.route('/signup')
    .post(userSignup)
    // .get(getBattles);

router.route('/login')
    .post(userLogin)



// router
//     .route('/:id')
//     .delete(deleteTodo)
//     .get(getTodo)
//     .put(updateTodo);
    

module.exports = router;