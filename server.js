const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use(express.static('client'));

app.use("/api/sharedProps", require("./server/routes/sharedProp"));

app.listen(3500, () => {
  console.log("Listening at port 3500");
});
