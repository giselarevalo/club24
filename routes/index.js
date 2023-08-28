const express = require('express');
const router = express.Router();

const {index} = require('../Controllers/indexController');

/* GET home page. */
router
    .get('/',index );
    

module.exports = router;
