const jwt = require("jsonwebtoken");

module.exports.verifyJwtToken = (req, res, next) =>{
    var token;
    if("authorization" in req.headers){
        token = req.headers['authorization'].split(' ')[1];
    }


    if(!token){
            return res.status(403).send({auth: false, message: "no token generated"});
        }


    else{
            jwt.verify(token, "THISissecret", (err, decoded)=>{
                console.log(token)
                if(err){
                    res.status(500).send({auth:false, message:"Token authentication failed"});
                }
                else{
                    req._id = decoded._id;
                    next(); 
            }
        })
    }
    }