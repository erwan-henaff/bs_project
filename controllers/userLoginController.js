const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
let key = require('../env/key');
let jwt_key = key.jwt_key;


const UserLogin = require('../models/UserLogin');



exports.userSignup = async (req,res,next) => {
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
                        password: hash
                    })
                    try {
                        await userLogin.save(); 
                        res.status(200).send(userLogin.email)
                    }
                    catch (err) {
                        res.status(401).json({
                            error: err.errors
                        })
                    }
                    
                }
            })
        }
        
        
    } catch (err) {
        next(err);
    } 
};


exports.userLogin = async (req,res,next) => {
    try {

        let checkUserExist = await UserLogin.findOne({email:req.body.email}); 

        if (!checkUserExist) {
            return res.status(401).json({
                message: "authorization failed"
            })
        }
        else {
            bcrypt.compare(req.body.password, checkUserExist.password, function(err, result) {
                if (err){
                    return res.status(401).json({
                        message: "authorization failed"
                    })
                }
                if (result){
                  // Send JWT
                  const token = jwt.sign(
                    {
                      email: checkUserExist.email
                    },
                    jwt_key,
                    {
                        expiresIn: "1h"
                    }
                  );
                  return res.status(200).json({
                    message: "Auth successful",
                    email: checkUserExist.email,
                    token: token
                  });

                } else {
                    return res.status(401).json({
                        message: "authorization failed"
                    })
                }
            });
        }  
    } catch (e) {
        next(e);
    } 
};

exports.addCronJobs = async (req,res,next) => {
    try {
        /// check webtoken and then save cronjobs time
        var decoded = jwt.verify(req.body.token, jwt_key);
        let checkUser = await UserLogin.findOne({email:decoded.email}); 
        checkUser.cronJobs = req.body.cronJobs;
        await checkUser.save();
        const token = jwt.sign(
            {
              email: checkUser.email
            },
            jwt_key,
            {
                expiresIn: "1h"
            }
        );
        return res.status(200).json({
            message: "time saved",
            token: token
        });
        
    
    } catch (e) {
        next(e);
    } 
};