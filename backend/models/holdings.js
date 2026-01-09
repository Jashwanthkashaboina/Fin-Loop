const mongoose = require('mongoose');
const Schema = mongoose.Schema; // we are created this 
// becuase when every time when we create new schema we need to write like "new mongoose.Schema"
// instead we can simply use Schema

// const HoldingsSchema = new Schema({
//     name: String,
//     qty: Number,
//     avg: Number,
//     price: Number,
//     net: String,
//     day: String,
// });
const HoldingsSchema = new Schema({
  name: { 
    type: String, 
    unique: true 
  },
  qty: Number,
  avgPrice: Number
});


// now using the above schema we are creating a model
// Here "Holding" -- mongodb will take it as plural and makes a collection named ---> "Holdings"
const HoldingsModel = mongoose.model("Holding", HoldingsSchema);
// now we are exporting the above model to index.jsx
module.exports = HoldingsModel;
