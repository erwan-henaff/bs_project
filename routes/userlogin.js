var express = require('express');
var router = express.Router();

const { userSignup, userLogin, addCronJobs } = require ('../controllers/userLoginController');


router.route('/signup')
    .post(userSignup)

router.route('/login')
    .post(userLogin)

router.route('/cronjobs')
    .put(addCronJobs)



// router
//     .route('/:id')
//     .delete(deleteTodo)
//     .get(getTodo)
//     .put(updateTodo);
    

module.exports = router;