const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./key");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
app.use(bodyParser.json());
app.use(cors());
const dayjs = require("dayjs");

mongoose.connect(MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo ");
});
mongoose.connection.on("error", (err) => {
  console.log("error connecting", err);
});

const loginroutes = require("./routes/auth");
const orders = require("./routes/order");

// app.use("/order", async function (req, res, next) {
//   try {
//     const token = await req.headers.authorization?.split(" ")[1];
//     console.log(token);
//     if (!token) {
//       return res.status(401).json({
//         status: "failed",
//         message: "not authenticated",
//       });
//     }
//     const decoded = jwt.verify(token, "secret");
//     if (!decoded) {
//       return res.status(401).json({
//         status: "failed",
//         message: "token invalid",
//       });
//     }
//     req.user = decoded.data;
//   } catch (e) {
//     return res.status(500).json({
//       status: "failed",
//       message: e.message,
//     });
//   }

//   next();
// });

app.use("/", loginroutes);
app.use("/", orders);

app.listen(5000, () => console.log("server started"));




// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const PORT = 5000
// const { MONGOURI } = require('./key');
// const cors = require("cors");
// const { name } = require("ejs");
// const { schema } = require("./models/database_schema");

// mongoose.connect(MONGOURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// mongoose.connection.on('connected', ()=>{
//     console.log("connected to mongo database");
// });

// mongoose.connection.on('error', (error)=>{
//     console.log("connection unsuccessful");
// });

// app.use(cors());
// require('./models/database_schema')
// require('./models/orders_schema')
// app.use(express.json());
// app.use(express.json());

// app.use(require('./routes/auth'))
// app.use(require('./routes/order'))

// app.listen(PORT, () => {
//     console.log("Server is running at ", PORT);
// });

