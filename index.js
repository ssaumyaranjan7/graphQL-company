const express = require('express');
const mongoose = require(`mongoose`);
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require( `./typedefs`);
const { resolvers } = require( `./resolvers`);
const server = new ApolloServer({typeDefs, resolvers});
const app = express();
(async () => {
  await mongoose.connect('mongodb://localhost/company', {useNewUrlParser: true})
})();
server.applyMiddleware({app});
app.listen({port: 4000}, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
})