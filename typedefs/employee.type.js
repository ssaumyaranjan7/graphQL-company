const { gql } = require('apollo-server-express');

const employeeType = gql`
type Query {
    employees: [employee!]
    employee(id: ID!): employee
  }
type Mutation {
    signUp(firstName: String!, lastName: String!,
     email: String!, password: String! ): employee
    update(id: ID!, firstName: String, lastName: String,
      email: String, password: String ): employee
    delete(id: ID!): employee
}  
type employee {
    id: ID!
    firstName: String,
    lastName: String,
    email: String,
    password: String
}  
  `;

  module.exports = employeeType;