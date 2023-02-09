require("dotenv").config({path:"./config/config.env"});
require("./models/db")
require("./config/passportConfig");

const request = require('request');


const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");

const rtsIndex = require("./routing/user.route");

const app = express()

app.use(bodyParser.json());
app.use(cors());
app.use("/api", rtsIndex);
app.use(cookieParser());
app.use(passport.initialize());
app.use((err, req, res , next) => {
    if(err.name == "ValidationError"){
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
}) 




app.listen(4000, ()=> console.log(`Server started at ${process.env.PORT}`));