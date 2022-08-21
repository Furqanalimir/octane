import validationSchema from '../middleware/user.middleware.js'
import userHelper from "./user.middleware.helper.js";

const createUser = {
    //validating  fields before creating
    validationSchema: validationSchema,
    resolve: userHelper.createUser
}

const resolvers = {
    Query:{
        /**
         * 
         * @param {*} email 
         * @param {*} phone 
         * @returns user details or error
         */
        getUser: userHelper.getUser
    },
    //for accepting data
    Mutation:{
        /**
         * 
         * @param {*} parent 
         * @param {*} args 
         * @param {*} context 
         * @param {*} info 
         * @returns user created or error
         */
        createUser: createUser
    }
}

export default resolvers