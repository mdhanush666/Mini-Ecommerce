const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  cardItems:Array,
  amount:String,
  status:String,
  createdAt:Date
});

const orderModel = mongoose.model('order', orderSchema);

module.exports = orderModel;