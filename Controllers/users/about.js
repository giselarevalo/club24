module.exports = (req, res) => {
    const { name, email, edad, color } = req.body;
    req.session.userData = {
        name,
        email,
        edad,
        color
    };
    res.render('about', { userData: req.session.userData }); // Pasamos req.session.userData
};
