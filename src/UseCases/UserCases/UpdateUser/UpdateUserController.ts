import { Request, Response } from "express";
import UpdateUserUseCase from "./UpdateUserUseCase";



class UpdateUserController{
    async handle(request:Request , response: Response){
        const {id,firstName,lastName,} = request.body        

        const updateUserUseCase = new UpdateUserUseCase()

        const updateUser = await updateUserUseCase.execute({id,firstName,lastName})
        
        
        return response.json(updateUser)
    }
}

export default UpdateUserController