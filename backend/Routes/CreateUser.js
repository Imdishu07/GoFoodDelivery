const express = require('express')
const router = express.Router()
const User = require('../Models/Users')
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "MyNameIsDishantMahajanAndIamEngineer"
router.post("/createuser",
    body('email', "Incorrect Format").isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', "Password should be of Minimum 5 characters").isLength({ min: 5 })
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt)

        try {
            await User.create({
                name: req.body.name,
                location: req.body.location,
                email: req.body.email,
                password: secPassword,
            })

                .then(res.json({ success: true }));

        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })

router.post("/loginuser",
    body('email', "Incorrect Format").isEmail(),
    body('password', "Password should be of Minimum 5 characters").isLength({ min: 5 }),
    async(req, res) =>{
    let email = req.body.email

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
        try {
            let userData = await User.findOne({email});
            if(!userData){
                return res.status(400).json({errors: "Incorrect Credentials"})
            }

            const passCompare = bcrypt.compare(req.body.password, userData.password)
            if(!passCompare){
                return res.status(400).json({errors: "Incorrect Credentials"})
            }

            const data = {
                user:{
                    id: userData.id
                }
            }

            const authToken = jwt.sign(data, jwtSecret)

            return res.json({success: true, authToken:authToken})
        } catch (error) {
            console.log(error)
            res.json({success : false});
        }
    })

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const User = require('../Models/Users');

// router.post("/createuser", async (req, res) => {
//   try {
//     const newUser = new User({
//       name: "Hemant Patil",
//       password: "12345678",
//       email: "hemantpatil@yahoo.com",
//       location: "Shirpur"
//     });

//     await newUser.save();
//     res.json({ success: true });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false });
//   }
// });

// module.exports = router;
