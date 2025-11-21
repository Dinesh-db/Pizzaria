const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/Pizzaria";

mongoose.connect(url)
  .then(() => console.log("Connection established successfully..."))
  .catch((err) => console.log("Error in connection:", err));

app.use(cors());
app.use(express.json());   // <-- REQUIRED for JSON body
// ------------------------^

const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  toppings: { type: [String], required: true }
});



const Pizza = mongoose.model("Pizza", pizzaSchema);

app.post("/order", (req, res) => {
  console.log("Received:", req.body);

  Pizza.insertMany(req.body)
    .then(data => res.send(data))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});


app.get('/', (req, res) => {
  Pizza.find({})
  .then((data)=>res.send(data))
  .catch((err)=>{
    console.log("Error in getting the data....",err);
  })
  
});

app.listen(9000, () => {
  console.log("Server running on port 9000...");
});
app.listen(9000,"192.168.1.6",()=>{
  console.log("Running on server");
});
