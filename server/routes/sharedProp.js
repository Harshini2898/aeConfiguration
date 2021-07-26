const express = require("express");
const router = express.Router();
const fs = require("fs");
const mongoose = require("mongoose");
const configurations = require("../models/configurations");

const dataFile = "./server/data/sharedProp.json";

router.get("/:text", async (req, res) => {
  var query = req.params.text;
  var re = new RegExp(query, "gi");
  try {
    const matchedProps = await configurations.find({
      $or: [{ tags: re }, { description: re }],
    });
    res.send(matchedProps);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  const { name, description, version, fit, tags } = req.body;

  try {
    let configuration = new configurations({
      name,
      description,
      version,
      fit,
      tags,
    });
    await configuration.save();
    res.json({ configuration });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(500).json({ msg: "Invalid ID" });
    }
    var config = await configurations.updateOne(req.param.id, {
      $set: req.body,
    });
    return res.json(config);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
