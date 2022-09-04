const express = require("express");
const cors = require("cors");
require('dotenv').config()
const mongoose = require("mongoose");
const mainDBConnection = mongoose.createConnection(
 process.env.DB_URL
);
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
const Schema = mongoose.Schema;
const TileSchema = new Schema({
  tileid: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
    default: "white",
  },
  username: {
    type: String,
    default: "",
  },
  time: { type: Date, default: Date.now() },
});
const Tile = mainDBConnection.model("Tiles", TileSchema);
app.post("/updateUsername", (req, res) => {
  Tile.findOne({ tileid: req.body.ID }).then((response) => {
    res.json({ username: response.username });
  });
});
app.get("/initial", (req, res) => {
  Tile.find().then((response) => res.json(response));
});
app.post("/updateColor", (req, res) => {
    var d = new Date();
    d.setMinutes(d.getMinutes()-5);
        Tile.findOne({username:req.body.username,time:{$gte:d}}).then(response=>{
   
            if (!Boolean(response)) {
              
              Tile.findOneAndUpdate({ tileid: req.body.ID },{username:req.body.username,color:req.body.color,time:Date.now()}).then(res.json({ timelimit: true }))
            } else {
             
              res.json({ timelimit: false });
            }
        })
      
      }
    );


app.listen(5000, () => {
  console.log("Listening on port 5000");
});
