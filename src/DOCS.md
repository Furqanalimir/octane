# use ApolloServer and express
# import { ApolloServer } from "apollo-server-express"
# import express from 'express';
# to start server with express
# const app = express();
# const apolloServer = new ApolloServer({
#    graphiql: process.env.ENV === 'production' && true  
#    typeDefs:userTypeDefs,   //import from typeDefs
#    resolvers:userResolver, //import from resolvers
#    middlewares: [userValidation]
# });
#
#
# to start port on path
# apolloServer.applyMiddleware({ app, path: "/pathname"}); for localhost://5000/pathname
#
# defining typeDefs
# import { gql } from "apollo-server-express";
# then define as 
#    typeDefs = gql`
#        input   OtherTypes{ title: string, from: string} defining custom type
#        type User{ name: string, other: OtherTypes}
#        type Error { error: string, message: string}
#        union UserRes = User | Error
#        type Query{
#           getUser(params: User(type)): UserRes
#           }
#        type Mutation{
#            createUser(user: newUser): userCreated
#                   }
#       `
#
# export default typeDefs    
#
#
# defining resolver
# resolvers{
#   Querry{
#    getUser:{
#       validationSchema: middleware //import from  middleware
#       resolver: getUserFunction() //imported form helper 
#       async(parent, args, context, info) [full function]
#       }
#       },
#    Mutation:{
#      createUser:{
#       validationSchema: middleware //import from  middleware
#       resolver: getUserFunction() //imported form helper 
#        async(parent, args, context, info)  [full function]
#                  }
#             }       
#       }
#   
#
# middleware
# import * as yup from 'yup';
# const validationSchema = yup.object().shape({
#    userName: yup
#      .string().trim().required()
#      .matches(/^[0-9]{5}$/, 'Must be exactly 5 digits'),
#    email: yup
#      .string().trim().required(),
#    password: yup
#      .string().min(8, "password length must be greater then 8").required(),
#  })
# export default validationSchema
#
#
#
#
#