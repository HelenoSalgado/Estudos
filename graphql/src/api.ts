import startedServer from './server';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';


startedServer({ typeDefs, resolvers });