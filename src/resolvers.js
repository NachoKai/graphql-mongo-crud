import { tasks } from "./mock";
import User from "./models/user";

export const resolvers = {
  Query: {
    hello(root, args, ctx, info) {
      return "Hello GraphQL";
    },
    greet(root, { name }, ctx, info) {
      return `Hello ${name}`;
    },
    Tasks() {
      return tasks;
    },
    async Users() {
      return await User.find();
    },
    async getUser(_, { _id }) {
      return await User.findById(_id);
    },
  },
  Mutation: {
    createTask(_, { input }) {
      const newId = tasks.length;
      input._id = newId;
      tasks.push(input);
      return input;
    },
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
