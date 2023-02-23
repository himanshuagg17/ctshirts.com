const express= require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const {UserModel}=require("../model/users.model");

const UserRouter=express.Router();

UserRouter.get("/",(req,res)=>{
    res.send("the home page is here");
})


//the router to register a new user
UserRouter.post("/register", async (req, res) => {
    const { name, email, password ,contact} = req.body;
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            // Store hash in your password DB.
            if (err) {
                res.send({ "msg": "New user Unable to  registered", "error": err.message });
            } else {
                const user = new UserModel({ name, email, password: hash ,contact});
                await user.save();
                res.send({ "msg": "New user has been registered" });
            }
        });

    }
    catch (error) {
        res.send({ "msg": "New user Unable to  registered", "error": error.message });
    }
})






// The router to login an already registered user and also give him a token
UserRouter.post("/login", async (req, res) => {
    const { email, password } = (req.body);
    try {
        const user = await UserModel.find({ email });
        // console.log(user)
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, result) => {
                // result == true
                if (result) {
                    let token = jwt.sign({ userID: user[0]._id }, "masai")
                    res.send({ "msg": "Logged In ", "token": token });
                    console.log("The user has been successfully logged in");
                } else {
                    res.send({ "msg": "Wrong credentials" });
                }
            });

        } else {
            res.send({ "msg": "Wrong credentials" });
        }
    } catch (error) {
        res.send({ "msg": "New user Unable to  Logged In", "error": error.message });
    }


})



module.exports={
    UserRouter
}