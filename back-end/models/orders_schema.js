
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderschema = new Schema({
    dateOrdered: {
        type: String,
    },
    productlist: [{
        producttype: { type: String },
        quantity: { type: Number, default: 0 },
        wash: { type: String, default: false, price: 20 },
        iron: { type: String, default: false, price: 15 },
        fold: { type: String, default: false, price: 10 },
        pack: { type: String, default: false, price: 25 },
        price: { type: Number, default: 0 },
    }, ],
    totalprice: {
        type: Number,
    },
    totalitems: {
        type: Number,
    },
    storelocation: {
        type: String,
        default: "Jp nagar",
    },
    city: {
        type: String,
        default: "Bengaluru",
    },
    storephone: {
        type: String,
        default: "9876543211",
    },
    status: {
        type: String,
        default: "Ready to pickup",
    },
});

const order = mongoose.model("order", orderschema);
module.exports = order;




// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const orderSchema = new Schema({
//     user_id: { type: mongoose.Types.ObjectId, reference: "User" },
//     orderDate: { type: String },
//     orderID: { type: String },
//     totalePrice: { type: Number },
//     storeLocation: { type: String, default: "Raj Nagar" },
//     city: { type: String, default: "Uttar Pradesh" },
//     storePhoneNumber: { type: String, default: "9876543210" },
//     details: [{
//         productType: { type: String },
//         quantity: { type: Number, default: 0 },
//         wash: { type: Boolean, default: false },
//         iron: { type: Boolean, default: false },
//         fold: { type: Boolean, default: false },
//         pack: { type: Boolean, default: false },
//         price: { type: Number, required: true },
//     },],
//     total_quantity: { type: Number },
//     total_price: { type: Number },
//     status: {
//         type: String,
//         enum: ["Ready to Pick Up", "Washed", "Ironed", "Delivered", "Cancelled"],
//         default: "Ready to Pick Up",
//         required: true,
//     },
//     address: { type: String },
// },
// { timestamps: true }
// );

// const order = mongoose.model("order", orderSchema);
// module.exports = order;
