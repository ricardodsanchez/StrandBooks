const express = require('express');
const { graphql, buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const Champion = require('./champion.js');

const schema = buildSchema(`
  type Query {
    language: String
    getChampions: [Champion]
    getChampionByName(name: String!): Champion
  }
  type Champion {
    name: String
    attackDamage: Float
  }
`);

const champions = [new Champion('Ashe', 100), new Champion('Vayne', 200)];

const rootValue = {
  language: () => 'GraphQL',
  getChampions: () => champions,
  getChampionByName: ({ name }) => {
    console.log(name);
    return champions.find(x => x.name === name);
  },
};

const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    rootValue,
    schema,
    graphiql: true,
  }),
);

app.listen(4000, () => console.log('Magic on 4000'));
