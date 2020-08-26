const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();

app.use(bodyParser.json());

const mongodbUrl = "mongodb://localhost/snapkart";
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const Product = mongoose.model(
  "product",
  new mongoose.Schema({
    _id: {
      type: String,
      default: shortid.generate,
    },
    title: String,
    image: String,
    description: String,
    price: Number,
    availableSizes: [String],
  })
);

app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

app.post("/api/products", async (req, res) => {
  const newProduct = Product(req.body);
  const saveProduct = await newProduct.save();
  res.send(saveProduct);
});

app.delete("/api/products/:id", async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deleteProduct);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("serve at http://localhost:" + port);
});
