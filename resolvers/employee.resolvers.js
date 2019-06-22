const models = require(`../models/index`);
const { ForbiddenError } = require(`apollo-server-express`);

const employeeResolvers = {
    Query: {
        employees: (root, args, context, info) => {
            return models.employee.find({})
        },
        employee: (root, { id }, context, info) => {
            return models.employee.findById(id)
        },
    },
    Mutation: {
        signUp: (root, args, context, info) => {
            return models.employee.create(args)
        },
        update: (root, { id, firstName, lastName, email, password }, context, info) => {
            let  updateInfo = {};
            return models.employee.findById(id).then((newEmployee) => {
                firstName ? newEmployee.firstName = firstName: "";
                lastName ? newEmployee.lastName = firstName: "";
                email ? newEmployee.email = email: "";
                password ? newEmployee.password = password: "";
                return newEmployee.save()
            })
        },
        delete: (root, { id }, context, info) => {
            return models.employee.findByIdAndRemove(id)
        }
    }
}

module.exports = employeeResolvers;