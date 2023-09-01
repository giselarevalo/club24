module.exports = (req,res,next) =>{
    res.locals.userData = req.session.userData && req.session.userData; //va a tener valor false o de un objeto 
    next()
}