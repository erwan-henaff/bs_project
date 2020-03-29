const createError = require('http-errors');

const bcrypt = require('bcrypt');

const UserLogin = require('../models/UserLogin');

// let key = require('../env/key');
// let appkeyDCI = key.appkeyDCI;
// let appkeyHome = key.appkeyHome;


exports.userLogin = async (req,res,next) => {

    try {

        let checkUserExist = await UserLogin.findOne({email:req.body.email}); 

        if (checkUserExist) {
            res.status(409).json({
                message: "email already in use"
            })
        }
        else {
            bcrypt.hash(req.body.password,10, async (err, hash) => {
                if (err) {
                    console.log("error")
                    res.status(500).json({
                        error: err
                    })
                } 
                else {
                    console.log("ok");
                    console.log(hash);
                    const userLogin = new UserLogin({
                        email : req.body.email,
                        password: hash,
                        cronJobs: req.body.cronJobs
                    })
                    await userLogin.save(); 
                    res.status(200).send(userLogin.email)
                }
            })
        }
        
        
    } catch (e) {
        next(e);
    } 
};
