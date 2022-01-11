const employeeService = require("../services/employeeService");

module.exports.createEmployee = async (req, res) => {
	let response = {};

	try {
		const responseFromService = await employeeService.createEmployee(
			req.body
		);
		response.status = 200;
		response.message = "Employee creation success";
		response.body = responseFromService;
	} catch (error) {
		console.error("problem in employee Controller", error);
		response.status = 400;
		response.message = error.message;
	}
	return res.status(response.status).send(response);
};
module.exports.getEmployees = async (req, res) => {
	let response = {};

	try {
		const responseFromService = await employeeService.getEmployees(req);
		response.status = 200;
		response.message = "Successfuly retried Employees";
		response.body = responseFromService;
	} catch (error) {
		console.error("problem in employeeController", error);
		response.status = 400;
		response.message = error.message;
	}
	return res.status(response.status).send(response);
};
