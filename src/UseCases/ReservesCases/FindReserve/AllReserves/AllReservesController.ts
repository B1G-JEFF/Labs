import { Request, Response } from "express";
import AllReservesUseCase from "./AllReservesUseCase";



class AllReservesController {
    async handle(request:Request , response :Response){ 
        const allReservesUseCase = new AllReservesUseCase()

        const allReserves =  await allReservesUseCase.execute()
        
        return response.json(allReserves)
    }
}

export default AllReservesController