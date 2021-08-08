var validator = require('validator');

module.exports.validateEmail = function (req, res, next){
    if (req.body.email !=null){
        if (!validator.isEmail(req.body.email)){
            res.status(400).send({message:'input invalid'})
            return;
        }
    }
    next();

};