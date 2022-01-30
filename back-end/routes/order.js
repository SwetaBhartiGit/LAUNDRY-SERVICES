
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser());
const dayjs = require("dayjs");
const router = express.Router();

const Items = require("../models/database_schema");
router.get("/order", async function(req, res) {
    try {
        // const existingorders = await Items.find().sort({_id:-1});
        const existingorders = await Items.find({ user: req.user }).sort({
            _id: -1,
        });
        return res.json({
            status: "success",
            existingorders,
        });
        console.log("existingorders", existingorders);
    } catch (e) {
        res.status(500).json({
            status: "signup failed",
            message: e.message,
        });
    }
});
router.post("/order", async function(req, res) {
    try {
        const { totalitems, totalprice, productlist, status } = req.body;
        const Orders = await Items.create({
            totalitems,
            totalprice,
            dateOrdered: dayjs().format("dddd, MMM D, h:mm A"),
            productlist,
            user: req.user,
        });
        return res.json({
            status: "success",
            message: "Order Succesfull",
            Orders,
        });
    } catch (e) {
        res.status(500).json({
            status: "order Not created",
            error: e.message,
        });
    }
});
router.get("/product/:id", async function(req, res) {
    try {
        const Orders = await Items.find({ _id: req.params.id });
        if (!Orders) {
            return res.status(404).json({
                status: "Not updated",
                message: "post not created/found",
            });
        }
        return res.json({
            status: "success",
            message: "Order Succesfull",
            Orders,
        });
    } catch (e) {
        res.status(500).json({
            status: "order Not created",
            error: e.message,
        });
    }
});

router.put("/product/:id", async function(req, res) {
    try {
        const { status } = req.body;
        const statusupdate = await Items.findOne({ _id: req.params.id });

        if (!statusupdate) {
            return res.status(404).json({
                status: "Not updated",
                message: "order not created/found",
            });
        }
        const Updatestatus = await Items.updateOne({ _id: req.params.id }, {
            status,
        });

        // const updatedstatus = await Items.findOne({_id:req.params.id});

        return res.json({
            status: "success",
            message: "Status Updated",
            // updatedstatus
        });
    } catch (e) {
        res.status(500).json({
            status: "Not an authorized user to update",
            message: e.message,
        });
    }
});

module.exports = router;




// const express = require("express");
// const Order = require("../models/orders_schema");
// const mongoose = require("mongoose");
// const router = express.Router();

// router.get("/orders", requireLogin, async function(res, req){
//     try {
//         const orders = await Order.find({ user_id: req.user})
//         return res.json({
//             message: "success",
//             data: {
//                 orders,
//             },
//         });
//     } catch (error) {
//         res.json({
//             status: "failed",
//             message: error.message,
//         });
//     }
// });

// router.post("/orders", requireLogin, async function(res, req){
//     const number = await order.countDocuments();
//     console.log("variable -->",number);
//     let order_num = "ABCDE4" + (number+1);

//     const { Wash, Press, Fold, Pack } = {
//         Wash = 20,
//         Pack = 25,
//         Fold = 10,
//         Press = 15,
//     };
//     const Details = req.body.details;
//     let Price = 0;
//     let Quantity = 0;

//     Details.forEach((detail) => {
//         let total = 0;
//         if(detail.wash){
//             total += detail.quantity * Wash;
//         }
//         if(detail.press){
//             total += detail.quantity * Press;
//         }
//         if(detail.fold){
//             total += detail.quantity * Fold;
//         }
//         if(detail.pack){
//             total += detail.quantity * Pack;
//         }
//         detail["price"] = total;
//         Price += total;
//         Quantity += parseInt(detail.quantity);
//     });

//     const { address, status } = req.body;
//     const order = await Order.create({
//         orderID: order_num,
//         details: Details, 
//         total_quantity: Quantity,
//         user_id: mongoose.Types.ObjectId(req.user[0]._id),
//         total_quantity: Quantity,
//         total_price: Price,
//         address,
//         status,
//     });

//     console.log("order.user --> ", order.user, "req.user --> ", req.user);
//     res.json({
//         status: "success",
//         data: {
//             order,
//         },
//     });
// });

// router.delete("/orders:id", requireLogin, async function (req, res) {
//     const post = await Order.findOne({_id: req.params.id});
//     if(!post){
//         return res.status(404).json({
//             status: "failed",
//             message: "Post Not Found",
//         });
//     }
//     await Order.deleteOne({_id: req.params.id});
//     res.json({
//         status: "success",
//     });
// });

// router.get("/orders:id", requireLogin, async function (req, res) {
//     try {
//       const order = await Order.findOne({
//         _id: mongoose.Types.ObjectId(req.params.id),
//         user_id: req.user,
//       });
//       return res.json({
//         status: "success",
//         data: order,
//       });
//     } catch (e) {
//       res.json({
//         status: "failed",
//         message: e.message,
//       });
//     }
//   });

//   router.put("/orders:id", requireLogin, async function (req, res) {
//     try {
//       const order = await Order.findOneAndUpdate(
//         {
//           _id: mongoose.Types.ObjectId(req.params.id),
//           user_id: req.user,
//         },
//         { $set: { status: "Cancelled" } },
//         { new: true }
//       );
//       return res.json({
//         status: "success",
//         data: order,
//       });
//     } catch (e) {
//       res.json({
//         status: "failed",
//         message: e.message,
//       });
//     }
//   });

// model.exports = router;
