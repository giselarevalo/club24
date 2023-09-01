
module.exports = {
    register : require ('./users/register'),
    processRegister : require ('./users/processRegister'),
    login : require ('./users/login'),
    processLogin : require ('./users/processLogin'),
    profile : require ('./users/profile'),
    updateProfile : require ('./users/updateProfile'),
    /* extra */
    about : require('./users/about'),
    logout : require('./users/logout')
}