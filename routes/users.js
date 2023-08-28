var express = require('express');
var router = express.Router();


const {register} = require('../Controllers/usersController');
/* /users */
router.get('/register',register ); 

module.exports = router;





