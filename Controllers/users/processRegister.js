const {validationResult} = require('express-validator')
const User = require('../../data/User');
const { readJSON, writeJSON } = require('../../data');

module.exports = (req,res)=>{

    let errors = validationResult(req);
    if(errors.isEmpty()){
        
        const users = readJSON('users.json');
        let newUser = new User(req.body);
        users.push(newUser);
        writeJSON(users,'users.json');

        const { name, email, edad, color } = req.body;
        req.session.userData = {
            name,
            email,
            edad,
            color
        }
        return res.redirect('/users/register')

    }else{
        return res.render('register',{
            old: req.body,
            errors : errors.mapped()
        })
    }
    
}