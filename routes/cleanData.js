var express = require('express');
var router = express.Router();

const { cleanData } = require ('../controllers/cleanDataController');



router.route('/')
    .post(cleanData)



// router
//     .route('/:id')
//     .delete(deleteTodo)
//     .get(getTodo)
//     .put(updateTodo);
    

module.exports = router;