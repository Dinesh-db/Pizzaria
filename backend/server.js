const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/Pizzaria";

mongoose.connect(url)
  .then(() => {
    console.log("Connection established successfully...");
  })
  .catch((err) => {
    console.log("Error in connection:", err);
  });

app.use(cors());
app.use(express.json());



const pizzaSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  image: String,
  description: String,
  ingredients: [String],
  toppings: [String]
});

const Place = mongoose.model("Pizza", pizzaSchema);

app.post("/order",(req,res)=>{
    Place.create(req.body,(err,data)=>{
        console.log(data);
        res.send(data);
        res.end();
    })
})

app.get('/', (req, res) => {
  res.send(`<h1>Server running</h1>`);
});

app.listen(9000, () => {
  console.log("Server running on port 9000...");
});
