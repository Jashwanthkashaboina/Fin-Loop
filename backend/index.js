require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const  HoldingsModel  = require('./models/holdings');
const positionsModel = require('./models/positions');
const ordersModel = require('./models/orders');
const bodyParser = require('body-parser');
const cors = require('cors');


const PORT = process.env.PORT || 8000;
const dbUrl = process.env.MONGODB_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());
main()
    .then(() =>{
        console.log("Connected to Database");
    })
    .catch((err) =>{
        console.log(err);
    });

async function main() {
    await mongoose.connect(dbUrl);
}

// Now, we insert Dummy or Temporary data to the database
// app.get("/addholdings", async (req, res) => {
//     try {
//         const tempData = [
//             {
//                 name: "BHARTIARTL",
//                 qty: 2,
//                 avg: 538.05,
//                 price: 541.15,
//                 net: "+0.58%",
//                 day: "+2.99%",
//             },
//             {
//                 name: "HDFCBANK",
//                 qty: 2,
//                 avg: 1383.4,
//                 price: 1522.35,
//                 net: "+10.04%",
//                 day: "+0.11%",
//             },
//             {
//                 name: "HINDUNILVR",
//                 qty: 1,
//                 avg: 2335.85,
//                 price: 2417.4,
//                 net: "+3.49%",
//                 day: "+0.21%",
//             },
//             {
//                 name: "INFY",
//                 qty: 1,
//                 avg: 1350.5,
//                 price: 1555.45,
//                 net: "+15.18%",
//                 day: "-1.60%",
//                 isLoss: true,
//             },
//             {
//                 name: "ITC",
//                 qty: 5,
//                 avg: 202.0,
//                 price: 207.9,
//                 net: "+2.92%",
//                 day: "+0.80%",
//             },
//             {
//                 name: "KPITTECH",
//                 qty: 5,
//                 avg: 250.3,
//                 price: 266.45,
//                 net: "+6.45%",
//                 day: "+3.54%",
//             },
//             {
//                 name: "M&M",
//                 qty: 2,
//                 avg: 809.9,
//                 price: 779.8,
//                 net: "-3.72%",
//                 day: "-0.01%",
//                 isLoss: true,
//             },
//             {
//                 name: "RELIANCE",
//                 qty: 1,
//                 avg: 2193.7,
//                 price: 2112.4,
//                 net: "-3.71%",
//                 day: "+1.44%",
//             },
//             {
//                 name: "SBIN",
//                 qty: 4,
//                 avg: 324.35,
//                 price: 430.2,
//                 net: "+32.63%",
//                 day: "-0.34%",
//                 isLoss: true,
//             },
//             {
//                 name: "SGBMAY29",
//                 qty: 2,
//                 avg: 4727.0,
//                 price: 4719.0,
//                 net: "-0.17%",
//                 day: "+0.15%",
//             },
//             {
//                 name: "TATAPOWER",
//                 qty: 5,
//                 avg: 104.2,
//                 price: 124.15,
//                 net: "+19.15%",
//                 day: "-0.24%",
//                 isLoss: true,
//             },
//             {
//                 name: "TCS",
//                 qty: 1,
//                 avg: 3041.7,
//                 price: 3194.8,
//                 net: "+5.03%",
//                 day: "-0.25%",
//                 isLoss: true,
//             },
//             {
//                 name: "WIPRO",
//                 qty: 4,
//                 avg: 489.3,
//                 price: 577.75,
//                 net: "+18.08%",
//                 day: "+0.32%",
//             },
//         ];

//         await HoldingsModel.insertMany(tempData);

//         res.status(201).send("Holdings added successfully");
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Error adding holdings");
//     }
// });

//=== In the same way Insert temp data of positions into DataBase ===//
// app.get("/addpositions", async(req, res) =>{
//     try{
//         const dummyData = [
//             {
//                 product: "CNC",
//                 name: "EVEREADY",
//                 qty: 2,
//                 avg: 316.27,
//                 price: 312.35,
//                 net: "+0.58%",
//                 day: "-1.24%",
//                 isLoss: true,
//             },
//             {
//                 product: "CNC",
//                 name: "JUBLFOOD",
//                 qty: 1,
//                 avg: 3124.75,
//                 price: 3082.65,
//                 net: "+10.04%",
//                 day: "-1.35%",
//                 isLoss: true,
//             },
//         ];
//         await positionsModel.insertMany(dummyData);
//         res.send("Positions added Successfully!");
//     } catch(err){
//         res.send(err);
//     }
// });

app.get("/allholdings", async(req, res) =>{
    let allholdings = await HoldingsModel.find({});
    res.send(allholdings);
});

app.get("/allpositions", async(req, res) =>{
    let allpositions = await positionsModel.find({});
    res.send(allpositions);
});

// to buy stocks
app.post("/neworder", async(req, res) =>{
    // 1. read data
    let { name, qty, price, mode } = req.body;
    // 2. create order
    let newOrder = new ordersModel({
        name,
        qty,
        price,
        mode,
    });
    //3. store to database
    await newOrder.save();
    res.send("order saved!");
})

app.listen(PORT, () =>{
    console.log("Sever is listening to the port 8080");
});