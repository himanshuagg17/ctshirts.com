const mongoose=require("mongoose");
mongoose.set('strictQuery', true);

const UserSchema= mongoose.Schema({
    name:String,
    email:String,
    password:String,
    contact:Number
})

const UserModel= mongoose.model("user",UserSchema);

module.exports={
    UserModel
}