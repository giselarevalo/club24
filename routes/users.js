var express = require('express');
var router = express.Router();
const {
    register,
    login,
    profile, 
    processRegister,
    processLogin,
    updateProfile,
    about,
    logout
} = require('../Controllers/usersController');
const registerValidator = require('../validations/registerValidator');

/* /users */
router
    .get('/register', register)
    .post('/register',registerValidator, processRegister)
    .get('/login', login)
    .post('/login', processLogin)
    .get('/profile', profile)
    .put('/update-profile',updateProfile)
    .get('/about',about)
    .get('/logout',logout)

module.exports = router;





