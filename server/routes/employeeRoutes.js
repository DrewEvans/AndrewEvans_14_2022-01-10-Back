const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.post("/employees/create", employeeController.createEmployee);
router.get("/employees/", employeeController.getEmployees);

module.exports = router;
