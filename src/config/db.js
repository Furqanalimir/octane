import mongoose from "mongoose";

async function connectDB(){
    const URI = process.env.MONGO_URI
    try {
        if(!URI) throw new Error("Mongo URI missing!")
        const con = await mongoose.connect(URI)
        console.log(`
        mongodb connected... 
        Host: ${con?.connection?.host.toUpperCase()}, 
        Port: ${con?.connection?.port}, 
        Name: ${con?.connection?.name.toUpperCase()}
        `, )
    } catch (err) {
        console.log("error in mongodb:~ ", err);
        process.exit(1);
    }
}

export default connectDB;