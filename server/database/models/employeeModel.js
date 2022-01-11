const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
	{
		city: { type: String, required: true },
		dateOfBirth: { type: Date, required: true },
		department: { type: String, required: true },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		startDate: { type: Date, required: true, default: Date.now },
		state: { type: String, required: true },
		street: { type: String, required: true },
		zipCode: { type: Number, required: true },
	},
	{
		timestamps: true,
		toObject: {
			transform: (doc, ret, options) => {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
				return ret;
			},
		},
	}
);

module.exports = mongoose.model("Employees", employeeSchema);
