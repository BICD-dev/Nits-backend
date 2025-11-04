import bcrypt from "bcrypt"

// hashing password function

export const hashedPassword= function(password, saltrounds = 12){
    let hashed = bcrypt.hash(password,saltrounds)
    return hashed;
}