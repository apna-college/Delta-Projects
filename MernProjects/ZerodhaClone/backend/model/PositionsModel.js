const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/positionsSchema");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };