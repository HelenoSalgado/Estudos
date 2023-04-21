import { ApolloServer } from 'apollo-server';

// Toda request é POST
// Toda request bate no mesmo endpoint (/graphql)
// Query -> obter informações (GET)
// Mutation -> manipular dados (POST, DELETE, PUT, PATCH)
// Scalar Types -> String, Int, Boolean, Float, ID


function startedServer({ typeDefs, resolvers }: any){
    const server = new ApolloServer({ typeDefs, resolvers });
    server.listen().then(({ url })=> console.log(`Server started at ${url}`));
}

export = startedServer;


