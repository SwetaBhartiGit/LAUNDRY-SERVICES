
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: [true, "Phone is required"],
    },
    state: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: [true, "District is required"],
    },
    pincode: {
        type: Number,
        required: true,
    },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;





// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     name: { 
//         type: String, 
//         required: [true, "Name is required"] 
//     },
//     email: { 
//         type: String, 
//         required: [true, "Email is required"], 
//         unique: true 
//     },
//     password: { 
//         type: String, 
//         required: true 
//     },
//     phone: { 
//         type: String, 
//         required: [true, "Phone Number is required"], 
//         unique: true 
//     },
//     state: { 
//         type: String, 
//         required: true 
//     },
//     district: { 
//         type: String, 
//         required: true 
//     },
//     pincode: { 
//         type: String, 
//         required: [true, "Pincode is required"] 
//     },
//     address: {
//          type: String, 
//          required: true 
//         },
// }, { timestamps: true });

// const User = mongoose.model("User", UserSchema);
// module.exports = User;
