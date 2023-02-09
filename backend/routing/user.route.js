const express = require("express")
const axios = require('axios');
const router =  express.Router(); 
const jwtToken = require("../utils/jwtToken");

const ctrlUser = require("../controller/user.controller");
const { isAuthenticated } = require("../middleware/auth");

const url = "http://api.airvisual.com/v2/countries?key=256713d5-b3a6-45eb-b68e-0a99b2dbe660"

router.post('/register', ctrlUser.register);
router.post("/login", ctrlUser.authenticate)
router.get("/userprofile/:id", ctrlUser.userProfile);
router.post('/update/:id', ctrlUser.updatePass);

module.exports = router;