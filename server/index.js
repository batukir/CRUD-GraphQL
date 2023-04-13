const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
const schema = require("./schema/schema");
const cors = require("cors");
const port = process.env.PORT || 4000;
const app = express();

connectDB();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, console.log(`Serving running on port ${port}`));
