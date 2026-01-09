require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const  HoldingsModel  = require('./models/holdings');
const positionsModel = require('./models/positions');
const ordersModel = require('./models/orders');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require("express-session");
const passport = require('passport');   
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const { isLoggedIn } = require('./middleware.js');


// routes
const userRouter = require('./routes/user');

const PORT = process.env.PORT || 8000;
const dbUrl = process.env.MONGODB_URL;

const app = express();



const sessionOptions = {
    // store: store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "none",
        secure: true,
    },
};


app.use(cors({
  origin: [ "http://localhost:5173", 
            "http://localhost:5174", 
            "https://finloop18.netlify.app",
            "https://zerodha-dashboard5.netlify.app"],
  credentials: true,
}));


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


app.use(express.urlencoded({ extended: true }));                            

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/',userRouter);

// Insert demo user
app.get("/demouser",async(req,res)=>{
    let fakeUser = new User({
        email: "dsa@gmail.com",
        username: "dsa"
    });

    //register is a static method 
    //it a gives convenience method to register a new user instance with given password
    //And also checks if username is unique or not
    // And automaically stores in database
    let registeredUser = await User.register(fakeUser,"helloworld");
    // console.log(registeredUser);
    res.send(registeredUser);
});



app.get("/holdings", isLoggedIn, async(req, res) =>{
    let allholdings = await HoldingsModel.find({});
    res.send(allholdings);
});

app.get("/positions", isLoggedIn, async(req, res) =>{
    let allpositions = await positionsModel.find({});
    res.send(allpositions);
});

// to buy stocks
// app.post("/orders", async(req, res) =>{
//     // 1. read data
//     let { name, qty, price, mode } = req.body;
//     // 2. create order
//     let newOrder = new ordersModel({
//         name,
//         qty,
//         price,
//         mode,
//     });
//     //3. store to database
//     await newOrder.save();
//     res.send("order saved!");
// })


app.get("/orders", isLoggedIn, async (req, res) => {
  const allOrders = await ordersModel.find({}).sort({ createdAt: -1 });
  res.json(allOrders);
});

app.post("/orders", isLoggedIn, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // 1. Save order
    const newOrder = new ordersModel({
      name,
      qty,
      price,
      mode,
    });
    await newOrder.save();

    // BUY logic 
    if (mode === "BUY") {
      const existingHolding = await HoldingsModel.findOne({ name });

      if (!existingHolding) {
        // stock not in holdings
        const newHolding = new HoldingsModel({
          name,
          qty,
          avgPrice: price,
        });
        await newHolding.save();
      } else {
            const oldQty = existingHolding.qty;
            const oldAvg = existingHolding.avgPrice || 0;

            const totalQty = oldQty + qty;

            const newAvgPrice =
                (oldQty * oldAvg + qty * price) / totalQty;

            existingHolding.qty = totalQty;
            existingHolding.avgPrice = newAvgPrice;

            await existingHolding.save();
        } 
    }
    else if (mode === "SELL") {
        const existingHolding = await HoldingsModel.findOne({ name });

        // Stock not in holdings
        if (!existingHolding) {
            return res.status(400).json({
            error: "Cannot sell stock that is not in holdings",
            });
        }

        //  Selling more than owned
        if (qty > existingHolding.qty) {
            return res.status(400).json({
            error: "Not enough quantity to sell",
            });
        }

        // Valid sell
        const remainingQty = existingHolding.qty - qty;

        if (remainingQty === 0) {
            // Remove holding completely
            await HoldingsModel.deleteOne({ name });
        } else {
            // Update remaining quantity
            existingHolding.qty = remainingQty;
            await existingHolding.save();
        }
    }
    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});


app.listen(PORT, () =>{
    console.log("Sever is listening to the port 8000");
});