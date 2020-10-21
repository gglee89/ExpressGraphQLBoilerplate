const express = require('express')
const PORT = process.env.PORT || 4000;
// Compatibility Layer between Express and GraphQL
// const expressGraphQL = require('express-graphql'); 
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

// Setting for GraphQL
// graphiql is only intended to be used on a development environment
// app.use('/graphql', expressGraphQL({ --> Old Version
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Server started. Listening to PORT ${PORT}`);
});