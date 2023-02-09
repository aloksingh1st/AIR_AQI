const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



var userSchema = new mongoose.Schema({
    fullName : {
        type:String,
        required:true
    },
    email :{
        type:String,
        unique:true,
        required:true,
    },
    password :{
        type:String,
        required:true,
        minlength:[4, "Password must be longer than 4 digit"]
    },
    saltSecret : String
})


//pre envent 

userSchema.pre('save', function(next){
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(this.password, salt, (err, hash)=>{
            this.password = hash;
            this.saltSecret =salt
            next();
        })
    })
})


//methonds 

userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}


userSchema.methods.generateToken = function () {
    console.log(this._id)
    return jwt.sign({_id : this._id},
        "THISissecret",
        {expiresIn:"2m"}
        )
}

mongoose.model("User", userSchema);