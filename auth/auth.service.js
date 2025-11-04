import { User } from "../Schema/UserSchema.js";
import bcrypt from 'bcrypt'

export const SignUpService = async function (username, password, firstname) {

    // validate for missing fields
    if(!username || !password || !firstname){
        let errorCode = 400;
        let errorMessage = {"success":false, "message":"Missing fields"}
        return {"code":errorCode, "message":errorMessage}
    }
    // check if username exists 
    const user = await User.findOne({username});
    if(user){
        let errorCode = 300; //look for the actual code for a resource already existing
        const errorMessage = {"success":false, "message":"Username already in use "}
        return {"code":errorCode, "message":errorMessage}
    }

    // also check if the usrename exists
    // hash the password
    const hashedPassword = bcrypt.hash(password,12)
    // create the account
    const newUser = await User.create({firstname,username,hashedPassword});

    let successCode = 201;
    const successMessage = {
        "success":true,
        "message":"Account created successfully",
        "data":newUser.id
    } 

    return {"code":successCode, "message":successMessage}
    
}

export const loginService = (username,password)=>{
    // check if all data is available
    if(!username || !password ){
         let errorCode = 400;
        let errorMessage = {"success":false, "message":"Missing fields"}
        return {"code":errorCode, "message":errorMessage}
    }
    // check if username exists
    const user = User.findOne({username});
    if(!user){
        let errorCode = 404;
        const errorMessage = {"success":false, "message":"Username not found"}
        return {"code":errorCode, "message":errorMessage}
    }

    // check if password is correct
    const isMatch = bcrypt.compare(password,user.password);
    if(!isMatch){
        let errorCode = 400;
        const errorMessage = {"success":false, "message":"Incorrect username or password"}
        
        return {"code":errorCode, "message":errorMessage}
    }
    let successCode = 200
    const successMessage = {
        "success":true,
        "message":"Login Successfull",
        "token":"jwttoken",
        "data": user
    }
    return {"code":successCode, "message":successMessage}
    
}