const express = require("express");
const router = express.Router();

router.post("/employee", async (req, res) => {
  try {
    const newEmployee = new employee({
      city: req.body.city,
      dateOfBirth: req.body.dateOfBirth,
      department: req.body.department,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      startDate: req.body.startDate,
      state: req.body.state,
      street: req.body.street,
      zipCode: req.body.zipCode,
    });

    let result = new newEmployee.save();

    return result;
  } catch (error) {
    console.error("Error", error);
  }
});
