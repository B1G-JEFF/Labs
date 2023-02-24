import { Request, Response } from "express";
import client from "../../../prisma/client";
import DeleteLabUseCase from "./DeleteLabUseCase";

class DeleteLabController{
    async handle(request:Request , response :Response){
        const {id} = request.body

        const lab = await client.labs.findFirst({where:{id}})        
        if(!lab){
            return response.json({status:"Error",mensage:"lab is not found"})
        }
        const deleteLabUseCase = new DeleteLabUseCase()

        const deleted = await deleteLabUseCase.execute(id)

        return response.json(deleted)

    }
}

export default DeleteLabController