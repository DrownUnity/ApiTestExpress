const express = require("express");
const router = require("./routes");

const app = express();
const PORT = 3001;

app.listen(PORT);

app.use(express.json());

app.use(router);
