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
    },
};


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



app.get("/holdings", async(req, res) =>{
    let allholdings = await HoldingsModel.find({});
    res.send(allholdings);
});

app.get("/positions", async(req, res) =>{
    let allpositions = await positionsModel.find({});
    res.send(allpositions);
});

// to buy stocks
app.post("/orders", async(req, res) =>{
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
    console.log("Sever is listening to the port 8000");
});