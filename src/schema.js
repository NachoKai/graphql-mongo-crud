"use strict";
const _ = require("lodash");
const gql = require("graphql-tag");
const { makeExecutableSchema } = require("graphql-tools");
const { typeDefs: usersTypeDefs, resolvers: usersResolvers } = require("./users");
const { typeDefs: tasksTypeDefs, resolvers: tasksResolvers } = require("./tasks");
const { typeDefs: othersTypeDefs, resolvers: othersResolvers } = require("./others");

const typeDefs = gql`
  type Query {
    ping: String
  }

  type Mutation {
    _empty: String
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

const resolvers = {
  Query: {
    ping() {
      return "pong";
    },
  },
};

let schema = makeExecutableSchema({
  typeDefs: [typeDefs, usersTypeDefs, tasksTypeDefs, othersTypeDefs],
  resolvers: _.merge([resolvers, usersResolvers, tasksResolvers, othersResolvers]),
});

module.exports = schema;
