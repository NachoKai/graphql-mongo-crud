import { makeExecutableSchema } from "graphql-tools";
const gql = require("graphql-tag");

const typeDefs = gql`
  extend type Query {
    hello: String!
    greet(name: String!): String!
  }
`;

export const resolvers = {
  Query: {
    hello(root, args, ctx, info) {
      return "Hello GraphQL";
    },
    greet(root, { name }, ctx, info) {
      return `Hello ${name}`;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
