import { Request, Response } from "express";
import FindUserUseCase from "./FindUserUseCase";

const findUserUsecase  = new FindUserUseCase


class FindUserController{

    async handleId(request :Request, response : Response){

        const {id} = request.params

        
        const user = await findUserUsecase.findID(id)

        return response.json(user)

    }

    async handleRole (request  : Request , response : Response){

        const {role} = request.params        

        const find = await findUserUsecase.findRole(role)

        return response.json(find)

    }

}


export default FindUserController;