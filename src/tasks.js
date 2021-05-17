const gql = require("graphql-tag");

const typeDefs = gql`
  extend type Query {
    Tasks: [Task]
  }

  type Task {
    _id: ID
    title: String!
    description: String
    number: Int
  }

  extend type Mutation {
    createTask(input: TaskInput): Task
  }

  input TaskInput {
    title: String!
    description: String
    number: Int
  }
`;

const resolvers = {
  Query: {
    Tasks() {
      return tasks;
    },
  },
  Mutation: {
    createTask(_, { input }) {
      const newId = tasks.length;
      input._id = newId;
      tasks.push(input);
      return input;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
