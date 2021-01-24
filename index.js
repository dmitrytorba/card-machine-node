const express = require("express");
const { postgraphile } = require("postgraphile");

// const pass = process.env.HABIT_PSQL_PASS;
// if (!pass) {
//   console.log("Please set HABIT_PSQL_PASS");
//   return;
// }

const app = express();

app.use(
  postgraphile(
    process.env.DATABASE_URL || `postgres:///habits`,
    "public",
    {
      watchPg: true,
      graphiql: true,
      enableCors: true,
      enhanceGraphiql: true,
    }
  )
);

app.listen(process.env.PORT || 3001);