const express = require('express');
const router = express.Router();
const fs = require('fs');

const dataFile = './server/data/sharedProp.json';

router.get("/:text", (req, res)=>{
  var query = req.params.text;
  var sharedProps = getSharedProps();
  var matchedProps = sharedProps.filter((sharedProp) => {
    var matchedTags =  sharedProp.tags.find(ele => ele == query);
    if(matchedTags) return true;
    const regexp = new RegExp(query, 'i');
    return sharedProp.description.match(regexp) || sharedProp.name.match(regexp);
  });
  matchedProps.length ? res.sendStatus(404): res.send(matchedProps);
});

router.put("/:id",(req, res) => {
  var id = req.params.id;
  req.body;
  var sharedProps = getSharedProps();
  var updatedProps = sharedProps.map((sharedProp) => {
    if(sharedProp.id == id){
      sharedProp = {sharedProp, ...req.body}
    }
  });
  saveSharedProps(updatedProps);
  res.sendStatus(204);
});

function getSharedProps(){
  var data = fs.readFileSync(dataFile, 'utf8');
  return JSON.parse(data);
}

function saveSharedProps(data) {
  fs.writeFile(dataFile, JSON.stringify(data), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = router;
