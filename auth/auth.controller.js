import { loginService,SignUpService } from "./auth.service.js"
export const loginController = async (req,res)=>{
    try {
        const {username,password} = req.body
        let result = await loginService(username, password)
        if(result.message.success){
            res.status(result.code).json(result.message.message)
        } else{
            res.status(result.code).json(result.message.message)
        }
    } catch (error) {
        console.error(error)
    }

}

export const signUpController = async (req,res)=>{
    try {
        const {firstname, username, password} = req.body
        let result = await SignUpService(username, password, firstname);
        if(result.message.success){
            res.status(result.code).json(result.message.message)
        } else{
            res.status(result.code).json(result.message.message)
        }
    } catch (error) {
        console.error(error)
    }
}