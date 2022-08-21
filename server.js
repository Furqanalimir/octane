import express from 'express';
import { ApolloServer } from "apollo-server-express";
import userTypeDefs from './src/typeDefs/userDefs.js';
import userResolver from './src/resolvers/user.resolver.js';
import connectDB from './src/config/db.js';
import {config} from 'dotenv'

const PORT = process.env.PORT || 4000;

async function startServer() {
    config()
    
    const app = express();
    const apolloServer = new ApolloServer({
        graphiql: process.env.ENV === 'production' && true,    
        typeDefs:userTypeDefs,
        resolvers:userResolver,
        // middlewares: [userValidation]
    });
    
    await connectDB()
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: "/falcon"});
    
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
}

startServer()