const mongoose=require("mongoose");
mongoose.set('strictQuery', true);

const connection=mongoose.connect("mongodb+srv://himanshu:himanshu@cluster0.cyv3gab.mongodb.net/ctshirts?retryWrites=true&w=majority");

module.exports={
    connection
}