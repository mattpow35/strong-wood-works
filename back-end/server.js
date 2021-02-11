const express = require('express');
const bodyParser = require("body-parser");

const multer = require('multer');
const upload = multer({
  dest: '../front-end/public/images',
   limits: {
     fileSize: 10000000
   }
});


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/strong-wood-craft', {
  useNewUrlParser: true
});


const productSchema = new mongoose.Schema({
  name: String,
  path: String,
  description: String,
});

const Product = mongoose.model('Product', productSchema);

app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

app.post('/api/products', async (req, res) => {

  const product = new Product({
    name: req.body.name,
    path: req.body.path,
    description: req.body.description,
  });
  try {
    console.log("trying to save new item");
    await product.save();
    res.send(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/products', async (req, res) => {
  try {
    let products = await Product.find();
    res.send(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/items/:id', async (req, res) => {
    try {
      await Item.deleteOne({
        _id: req.params.id
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
});

app.put('/api/items/:id', async (req, res) => {
    try {
      let item = await Item.findOne({
        _id: req.params.id
      });
      item.likes = req.body.likes;

      item.save();
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
});




app.listen(3000, () => console.log('Server listening on port 3000!'));
