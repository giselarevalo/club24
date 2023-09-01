const { check, body } = require('express-validator')
const { readJSON } = require('../data')

module.exports = [

    check('name')
        .isLength({
            min: 2
        }).withMessage("Debe tener como minimo 2 letras").bail()
        .isAlpha('es-ES').withMessage('Solo se permite caracteres alfabeticos'),
    check('edad')
        .matches(/^\d{2}$/)
        .withMessage('La edad debe ser un número de dos cifras'),
    check('email')
        .notEmpty()
        .withMessage("El email es obligatorio")
        .bail()
        .isEmail()
        .withMessage('Email no valido')
        .bail()
        .custom((value)=>{
            const users= readJSON('users.json')
            const user = users.find(user=> user.email=== value);
            if(user){
                return false
            }
            return true
        }).withMessage('El email ya se encuentra registrado'),
        
    /* check('color') */

    check('password')
        .isLength({
            min: 6,
            max: 12
        }).withMessage("Debe tener entre 6 y 12 caracteres"),
    body('password2')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                return false
            }
            return true
        }).withMessage('Las contraseñas no coinciden')

]