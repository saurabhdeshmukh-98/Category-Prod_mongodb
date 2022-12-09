const mongoose = require("mongoose");

const prod_schema = new mongoose.Schema(
  {
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    prod_name: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);
module.exports = mongoose.model("product", prod_schema);
