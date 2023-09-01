module.exports = (req,res)=>{
    /* Destrullo la sesion */
    req.session.destroy();
    return res.redirect('/')
}