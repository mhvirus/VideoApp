import { createError } from "../error.js"
import User from "../models/User.js"

export const update = async (req, res, next)=>{

   if(req.params.id === req.params.id) {
    try {
        const UpdateUser = await User.findByIdAndUpdate(req.params.id, {
            $set:res.body
        })
        res.status(200).json(UpdateUser)
    } catch (err) {
        next(err)
    }
   }else{
    return next(createError(403, "You can only Update Your Account"));
   } 

}

export const deleteUser = (req, res, next)=>{
}

export const getUser = (req, res, next)=>{
}

export const subsribe = (req, res, next)=>{
}

export const unsubsribe = (req, res, next)=>{
}

export const like = (req, res, next)=>{
}

export const dislike = (req, res, next)=>{
}

