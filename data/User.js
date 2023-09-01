const {v4 : uuidv4} = require('uuid');
const {hashSync}= require('bcryptjs');

const User = function ({name,email,color,password,edad,remember}){
    this.id = uuidv4();
    this.name = name.trim();
    this.color = color;
    this.email = email.trim();
    this.password = hashSync(password.trim(),10)
    this.edad = edad;
    this.remember = remember;
}

module.exports = User;