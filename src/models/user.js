import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minLength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        minLength: 10,
    },
    password: {
        type: String,
        hide: true,
        minLength: 8,
        required: true,
    },
    education:[{
        degree: {type: String},
        school:{type: String},
        from: {type: String},
        to: {type: String}
    }],
    experience: [{
        title: { type: String },
        role: {type: String}, 
        jobDesc: {type: String},
        from: { type: Date },
        to: { type: Date }
    }],
    social:[{}],
    desc: {
        type: String,
    },
    verified:{
        type: Boolean,
        default: false,
    },
    isBlocked:{
        type: Boolean,
        default: false,
    }
},{timestamps: true});

UserSchema.pre('save', function(next){
    try {
        const emailReg = new RegExp(/[\w\d.]*[\w\d]*@[\w\d].[\w\d]/)
    if(!emailReg.test(this.email)){
        throw new Error("Please enter valid email");
    }
    this.password = this.password + ":Hashed"
    next();
    } catch (error) {
        console.log("################");
        return error.message;
    }
});


const User = mongoose.model("User", UserSchema);

export default User;