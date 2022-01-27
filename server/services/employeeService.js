const Employees = require("../database/models/employeeModel");

module.exports.createEmployee = async (serviceData) => {
	try {
		const employee = Employees;

		const newEmployee = new employee({
			city: serviceData.city,
			dateOfBirth: serviceData.dateOfBirth,
			department: serviceData.department,
			firstName: serviceData.firstName,
			lastName: serviceData.lastName,
			startDate: serviceData.startDate,
			state: serviceData.state,
			street: serviceData.street,
			zipCode: serviceData.zipCode,
		});

		let result = await newEmployee.save();

		return result;
	} catch (error) {
		console.error("Error in Employee Service", error);
		throw new Error(error);
	}
};

module.exports.getEmployees = async (res, req) => {
	try {
		const employees = await Employees.find();

		if (!employees) {
			throw new Error("No Employees");
		}

		return employees;
	} catch (error) {
		console.error("Error in employee Service");
		throw new Error(error);
	}
};
