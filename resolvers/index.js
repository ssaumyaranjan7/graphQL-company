const messageResolvers = require(`./message.resolvers`);
const employeeResolvers = require(`./employee.resolvers`);

const resolvers =  [messageResolvers, employeeResolvers] ;
module.exports = { resolvers };