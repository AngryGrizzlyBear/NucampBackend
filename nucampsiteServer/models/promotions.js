const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    cost: {
      type: Currency,
      required: true,
      min: 0,
    },

    featured: {
      type: Boolean,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Promotion = mongoose.model("Promotion", promotionSchema);
module.exports = Promotion;
