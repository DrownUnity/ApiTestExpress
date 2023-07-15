const express = require("express");
const router = express.Router();
const products = require("../controllers/getProducts")
const users = require("../controllers/getUsers");
const createProduct = require("../controllers/createProduct");
const CreateUser = require("../controllers/createUser");

// GET

router.get("/products", (req, res) => {
  res.status(200).json(products)
})

router.get("/users", (req, res) => {
  res.status(200).json(users)
})

// POST

router.post("/produts", (req, res) => {
  const {name, price, image} = req.body;

  const product = createProduct(name, price, image);

  res.status(201).json({
    message: "Product Created",
    data: product
  })

})

router.post("/users", (req, res) => {
  const {user, email, avatar} = req.body;

  const newUser = CreateUser(user, email, avatar);

  res.status(201).json({
    message: "User Created",
    data:newUser
  });

})

// Update

router.patch("/products/:id", (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.status(202).res({
    message: "Updated",
    data: body,
    id
  })
})

router.patch("/users/:id", (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.status(202).res({
    message: "Updated",
    data: body,
    id
  })
})


// Deleted

router.delete("products/:id", (req, res) => {
  const {id} = req.params;
  res.status(202).json({
    message: "Deleted",
    id
  })
})

module.exports = router;
