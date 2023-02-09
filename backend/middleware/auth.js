const catchAsyncError = require("./catchAsyncError");
// const User = require("../models/userModels"); 
const jwt = require("jsonwebtoken");

exports.isAuthenticated = catchAsyncError(async (req, res, next)=>{
    const {token} =req.cookies;
    console.log(token);
    if(!token){
        return next(new ErrorHandler("Please login to access this resource", 401));
    }
    else{
        res.send("yes");
    }
    
    // const decodedData = jwt.verify(token ,"THISISDUMMYTEXT");
    // req.user = await User.findById(decodedData.id);
    // console.log(decodedData)
    // next();
});