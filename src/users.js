import { makeExecutableSchema } from "graphql-tools";
const gql = require("graphql-tag");

const typeDefs = gql`
  extend type Query {
    Users: [User]
    getUser(_id: ID): User
  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    age: Int
  }

  extend type Mutation {
    createUser(input: UserInput): User
    updateUser(_id: ID!, input: UserInput): User
    deleteUser(_id: ID!): User
  }

  input UserInput {
    firstName: String
    lastName: String
    age: Int
  }
`;

const resolvers = {
  Query: {
    async Users() {
      return await User.find();
    },
    async getUser(_, { _id }) {
      return await User.findById(_id);
    },
  },
  Mutation: {
    async createUser(_, { input }) {
      return await User.create(input);
    },
    async updateUser(_, { _id, input }) {
      return await User.findByIdAndUpdate(_id, input, { new: true });
    },
    async deleteUser(_, { _id }) {
      return await User.findByIdAndDelete(_id);
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
