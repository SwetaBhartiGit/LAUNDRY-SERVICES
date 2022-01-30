
const express = require("express");
const User = require("../models/orders_schema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/login", async function(req, res) {
    try {
        const { email, name, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.json({
                status: "failed",
                message: "please enter a valid email or phone number.",
                data: "error",
            });
        }

        const password_match = await bcrypt.compare(password, user.password);
        if (!password_match) {
            return res.json({
                status: "failed",
                message: "password incorrect",
                data: "error",
            });
        }
        const token = jwt.sign({
                data: user._id,
            },
            "secret"
        );
        res.json({
            status: "success",
            data: token,
        });
    } catch (e) {
        return res.json({
            status: "failed",
            message: "internal error",
        });
    }
});

router.post("/sign_up", async function(req, res) {
    try {
        const { name, email, password, address, phone, state, district, pincode } =
        req.body;
        const hash = await bcrypt.hash(password, 10);
        console.log(hash);
        await User.create({
            name,
            email,
            password: hash,
            address,
            phone,
            state,
            district,
            pincode,
        });
        res.json({
            status: "success",
            message: "successfully signed up.",
        });
    } catch (e) {
        res.json({
            status: "failed",
            message: e.message,
        });
    }
});
module.exports = router;






// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");
// const User = mongoose.model("user");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = require('../key');
// const loginRequire = require('../middleware/loginRequire');


// router.get('/', (req, res) => {
//     res.send("Hello")
// });

// router.get('/protected', loginRequire,(req,res) => {
//     res.send("hello user")
// });

// router.post('/register', (req,res) => {
//     //console.log(req.body.name)
//     const {name,email,password,phone,address,district,pincode,state} = req.body
//     if(!email || !password || !name || !phone || !address ||!district || !pincode || !state) {
//         return res.status(422).json({error:"please add all the fields"})
//     }
//     console.log(req.body)
//     User.findOne({email:email})
//     .then((savedUser) => {
//         if(savedUser) {
//             return res.status(422).json({error:"user already exists with that email"})
//         }
//         bcrypt.hash(password,12)
//         .then(hashedpassword => {
//             const user = new User({
//                 email,
//                 password:hashedpassword,
//                 name,
//                 phone,
//                 address,
//                 district,
//                 state,
//                 pincode
//             })
    
//             user.save()
//             .then(user => {
//                 res.json({message:"saved succesfully"})
//             })
//             .catch(err => {
//                 console.log("Error is",err)
            
//             })
//         })
        
//     })
//     .catch(err => {
//         console.log(err)
//     })

// });

// router.post('/signin' ,(req,res) => {
//     const {email,password} = req.body
//     console.log(email)
//     if (!email || !password){
//         return res.status(422).json({error:"please add email or password"})
//     }
//     User.findOne({ email:email} )
//     .then(savedUser => {
//         if(!savedUser){
//             return res.status(422).json({error:"Invalid Email or password"})
//         }
//         bcrypt.compare(password,savedUser.password)
//         .then(doMatch =>{
//             if(doMatch){
//                 //res.json({message:"sucessfully signed in"})
//                 const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
//                 const {_id,name,email} = savedUser
//                 res.json({token:token,message:"Logged in Successfully"})
//                 //res.json({token,user:{_id,name,email}})
//             }
//             else{
//                 return res.status(422).json({error:"Invalid Email or password"})
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     })
// });

// module.exports = router;
