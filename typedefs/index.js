const  messageType  = require(`./message.type`);
const employeeType = require(`./employee.type`)
const typeDefs =  [messageType, employeeType];
module.exports =  { typeDefs };