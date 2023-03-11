import { Request, Response } from "express";
import AllClassSchudules from "./AllSchudulesUseCase";





class AllSchudulesController{
    async handle(request: Request , response : Response){

        const allschudules = new AllClassSchudules

        const find = await allschudules.execute()

        return response.json(find)
    }
}

export default AllSchudulesController