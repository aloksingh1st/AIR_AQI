

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/register", (err)=>{
    if (!err){
        console.log("DB connected succesfully");
    }
    else{
        console.log(JSON.stringify(err, undefined, 2));
    }
    
});

require("./user.model");