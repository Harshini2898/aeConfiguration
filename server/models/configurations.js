const mongoose = require("mongoose");

const ConfigurationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  version: {
    type: String,
  },
  fit: {
    type: Boolean,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("configurations", ConfigurationSchema);
