import { GraphQLServer } from 'graphql-yoga';
import Query from './resolvers/query';

const createServer = () =>
  new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Query,
    },
  });

export default createServer;
