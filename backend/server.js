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

app.get('/', (req, res) => {
  res.send(`<h1>Server running</h1>`);
});

app.listen(9000, () => {
  console.log("Server running on port 9000...");
});
