const express = require("express");
const router = express.Router();
const products = require("../controllers/createProducts")
const users = require("../controllers/createUsers")

router.get("/products", (req, res) => {
  res.status(200).json(products)
})

router.get("/users", (req, res) => {
  res.status(200).json(users)
})

module.exports = router;
