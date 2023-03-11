import { Request , Response } from "express";
import DeleteSchudulesUseCase from "./DeleteSchudulesUseCase";



class DeleteClassSchudulesController{

    async handle(request : Request , response : Response){

        const {id} = request.params

        const deleteSchudulesUseCase = new DeleteSchudulesUseCase
        
        await deleteSchudulesUseCase.execute(id)

        return response.json({mensage:"sucess"})
        
    }
}

export default DeleteClassSchudulesController