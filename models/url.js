const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: "string",
      required: true,
      unique: true,
    },
    redirectURL: {
      type: "string",
      required: true,
    },

    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamp: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
