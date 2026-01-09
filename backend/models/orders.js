const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const ordersSchema = new Schema({
//     name: String,
//     qty: Number,
//     price: Number,
//     mode: String,
// });

const ordersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: { 
    type: String, 
    enum: ["BUY", "SELL"] 
    },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});
   
const ordersModel = mongoose.model("order", ordersSchema);
module.exports = ordersModel;
