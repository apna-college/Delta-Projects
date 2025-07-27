const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/ordersSchema");

const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };