import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import { connect } from "./db";

const app = express();
connect();

app.set("port", process.env.PORT || 4000);

app.get("/", (req, res) => {
  return res.json({
    message: "Hello World",
  });
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    // context: {
    //   messageId: 1,
    // },
  })
);

app.listen(app.get("port"), () => {
  console.log("Listening on port", app.get("port"));
});
