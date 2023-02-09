const { default: mongoose } = require("mongoose");
const passport = require("passport");
const User = mongoose.model('User');
const lodash = require("lodash")



const key = "256713d5-b3a6-45eb-b68e-0a99b2dbe660"
var country;
var state;
var city;

module.exports.register = (req, res, next) =>{
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save((err, doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            if(err.code == 11000){
                res.status(422).send(["Email already exists"])
            }
            else{
                return next(err);
            }
        }
    });
}


//login controller

  module.exports.authenticate = (req, res, next) =>{
    passport.authenticate('local',(err, usr, info)=>{
      if(err) return res.status(400).json(err);

      else if(usr) {
        console.log("hsidfhi");
        console.log(usr)
        let token = usr.generateToken();
        return res.status(200).json({'token' : token})
      }

      else{
        return res.status(404).json(info)
      }
    })(req, res);
  }


  module.exports.userProfile = (req, res, next) =>{

    console.log(req.params.id);
    User.findOne({_id : req.params.id},
      (err, user) =>{
        if(!user){
          return res.status(404).json({status :false, message :" User Not Found"});
        }
        else{
          return res.status(200).json({status : true, user: lodash.pick(user, ['fullName', 'email'])});
        }
      }
      );

  }




  module.exports.updatePass = async(req, res, next)=>{

    try {
      const new_pass = req.body.newPassword;
       data = await User.findOne({_id:req.params.id});
       if(data){
        data.password = new_pass;
        data.save();
        

         res.status(200).send({sucess:true, msg:"Password Updated Successfully"});
      }
       else{
         res.status(200).send({sucess:false, msg:"User Not Found"});
       }
      
    } catch (error) {
      res.status(400).send(error.message)      
    }
  }

