const express = require("express");
const graphqlHttp = require("express-graphql");
const schema = require("./schema");

const app = express();

app.use(
  "/graphql",
  graphqlHttp({
    schema
  })
);

app.listen(3000, () => {
  console.log("server start");
});
