require("dotenv").config();

const express = require("express");
const router = express.Router();
const employee = require("../server/database/models/employeeModel");
const dbConnection = require("./database/connection");

const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

//Connect to database
dbConnection();

//Handle Routes
app.use("api/", require("../routes/employeeRoutes"));

app.get("/", (req, res) => {
  res.send("<h2>server main</h2>");
});

app.listen(PORT, () => console.log(`App is listnening on ${PORT}`));
