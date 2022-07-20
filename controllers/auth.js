import mongoose from "mongoose"
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../error.js";
import jwt from "jsonwebtoken";


export const signup = async (req, res, next) => {
    try {
        // password Incription
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({...req.body, password: hash});

        await newUser.save();
        res.status(200).send("user has been created!")
    } catch (err) {
        next(err)
    }
};



export const signin = async (req, res, next) => {
    try {
        //finding the user
        const user = await User.findOne({name:req.body.name});
        if(!user) return next(createError(404, "User not Found~!"));

        //comparing the password
        const isCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isCorrect) return next(createError(400, "wrong credential!"));

        //creating the jsontoken jwt
        const token = jwt.sign({id:user._id}, process.env.JWT)

        //saprate password from other user details
        const {password, ...other} = user._doc;

        //creating cookie to save user data
        res.cookie("access_token", token,{
            httpOnly:true
        }).status(200)
          .json(other);



    } catch (err) {
        next(err)
    }
};