const { gql } = require('apollo-server-express');
const messageType = gql`
extend type Query {
    hello: String
  }
  `;
  module.exports =  messageType ;