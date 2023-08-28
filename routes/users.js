var express = require('express');
var router = express.Router();
const {
    register,
    login,
    profile, 
    processRegister,
    processLogin,
    updateProfile
} = require('../Controllers/usersController');


/* /users */
router
    .get('/register', register)
    .post('/register', processRegister)
    .get('/login', login)
    .post('/login', processLogin)
    .get('/profile', profile)
    .put('/update-profile',updateProfile)

module.exports = router;





