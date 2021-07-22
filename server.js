const express = require('express');

const app = express();

app.use(express.json({extended: false}));

app.use("/api/sharedProps", require("./server/routes/sharedProp"));

app.listen(3500, ()=>{
  console.log("Listening at port 3500");
})