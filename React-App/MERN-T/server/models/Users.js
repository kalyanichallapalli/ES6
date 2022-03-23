// here we can define the structrure of this model 
const mongoose = require("mongoose")
//we haveto creat ea schema 
const UserSchema = new mongoose.Schema(
    {
        id:{
           type: Number,
           required: true,
        },
        name: {
            type: String,
            required : true,
        },
    
        age: {
            type: Number,
            required: true,
        },

    }
);

//we  have to create A MODEL OUT of this schema 

const UserModel = mongoose.model("users", UserSchema) //this model function takes two things collection("users") and userschema 
module.exports = UserModel;