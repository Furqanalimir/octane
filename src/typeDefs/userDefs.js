import { gql } from "apollo-server-express";

const typeDefs = gql`
    
    type Exp{
        title: String, 
        from: String,
        to: String,
        role: String,
        jobDesc: String
        }
    type User{
        userName: String,
        email: String,
        phone: String,
        createdAt: String,
   
    }
    input inputExp{
        title: String, 
        from: String, 
        to: String, 
        role: String,
        jobDesc: String
        }
    input newUser{
        id: ID,
        userName: String,
        email: String,
        phone: String,
        password: String,
        experience: [inputExp]
        desc: String
    }
    
    input createUser{
        id: ID,
        userName: String,
        email: String,
        phone: String,
        password: String,
        experience: [inputExp]
        desc: String
    }
    type Error{
        error: String,
        message: String,
    }
    union userCreated = User | Error,
    type Mutation{
        createUser(user: newUser): userCreated
    }
    
    type Query{
        getUser(email: String): userCreated
        }
`

export default typeDefs;