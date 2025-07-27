const mongoose = require("mongoose");

const { HoldingsSchema } = require("../schemas/holdingsSchema");

const HoldingsModel = new mongoose.model("holding", HoldingsSchema);

module.exports = { HoldingsModel };