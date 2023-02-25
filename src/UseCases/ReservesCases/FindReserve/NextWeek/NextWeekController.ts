import { Request, Response } from "express";
import NextWeekUseCase from "./NextWeekUseCase";



class NextWeekController {

    async handle(request : Request,response:Response){
        const nextWeekUseCase = new NextWeekUseCase
        const nextWeek = await nextWeekUseCase.execute()

        return response.json(nextWeek)

    }
}

export default NextWeekController