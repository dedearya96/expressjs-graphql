import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { root } from './src/root.js';
import { schema } from './src/schema.js';
root

const app = express();
const port = 5000;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(port, () => {
    console.log('GraphQL Api running on http://localhost:' + port + '/graphql');
})