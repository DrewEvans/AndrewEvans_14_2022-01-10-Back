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
// Duplicate the ID field.
employeeSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

function dateFormat(date) {
  const month = date.getMonth();
  const day = date.getDate();
  const monthString = month >= 10 ? month : `0${month}`;
  const dayString = day >= 10 ? day : `0${day}`;
  return `${date.getFullYear()}-${monthString}-${dayString}`;
}

//Return date as string with yyyy/mm/dd format
employeeSchema.virtual("birthDate").get(function () {
  return dateFormat(this.dateOfBirth);
});
//Return date as string with yyyy/mm/dd format
employeeSchema.virtual("startDay").get(function () {
  return dateFormat(this.startDate);
});

// Ensure virtual fields are serialised.
employeeSchema.set("toJSON", {
  virtuals: true,
});
module.exports = mongoose.model("Employees", employeeSchema);
