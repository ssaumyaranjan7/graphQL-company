const mongoose = require(`mongoose`);

let employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        default: ""
    }
})
let employeeModel = new mongoose.model(`employee`, employeeSchema);

module.exports = employeeModel;