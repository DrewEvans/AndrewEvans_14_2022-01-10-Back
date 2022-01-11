require("dotenv").config();

const express = require("express");
const router = express.Router();
const employeeRoutes = require("./routes/employeeRoutes");
const employee = require("../server/database/models/employeeModel");
const dbConnection = require("./database/connection");
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

//Connect to database
dbConnection();

app.use(cors());

app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Handle Routes
app.use("/api", employeeRoutes);

app.get("/", (req, res) => {
	res.send("<h2>server main</h2>");
});

app.listen(PORT, () => console.log(`App is listnening on ${PORT}`));
