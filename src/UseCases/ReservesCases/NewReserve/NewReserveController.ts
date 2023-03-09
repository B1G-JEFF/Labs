import { Request, Response } from "express";
import NewReserveUseCase from "./NewReserveUseCase";

class NewReserveController {
  async handle(request: Request, response: Response) {

    
    const { labId, userId, date, entrytime, exitTime } = request.body;

    const newReserverUseCase = new NewReserveUseCase();
    const newReserve = await newReserverUseCase.execute({
      labId,
      userId,
      date,
      entryTime: entrytime,
      exitTime,
    });
    return response.json(newReserve);
  }
}

export default NewReserveController;
