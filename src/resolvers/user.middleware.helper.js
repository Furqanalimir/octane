import User from '../models/user.js';
const functions ={
    createUser: async(parent, args, context, info)=>{
            
        try {
         const {
             userName,
             email,
             phone,
             password,
             experience,
             desc,
         } = args.user;
         
         let user = await User.create({
             userName,
             email: email.toLowerCase(),
             phone,
             password,
             experience,
             desc,
         })
    
         user.save()
         return {
             __typename: "User", //triggers user type in user.TypeDefs (union) 
             userName: user.userName,
             email: user.email,
             phone: user.phone,
             createdAt: user.createdAt,
         };
        } catch (error) {
         console.log("Error--, user.resolver, createUser:-", error.message || error)
         
         const err = {
                 __typename: "Error", //triggers error type in user.TypeDefs (union)
                 error: "Error creating new  user",
                 message: error.message || error
             }
             return err;
        }
     },
     getUser: async(parent, args, context, info)=>{
        try {
            const {email} = args;
            
            const user = await User.findOne({email}).select("-_id -password");
            if(!user || (user && user.length === 0)){
                const err = {
                    __typename: "Error",
                    error: "Couldn't get the the details",
                    message: "User doesn't exist {email} not found"
                }
                return err
            }
            return user;
        } catch (error) {
            console.log("Error--, user.resolver, getUser:- ", error)
            const err = {
                __typename: "Error",
                error: "Couldn't create user",
                message: JSON.stringify(error?.message)
            }
            return err;
        }
    },
    
}

export default functions;