import { Request, Response } from "express";
import AllLabsUseCase from "./AllLabsUseCase";

class AllLabsController {
  async handle(request: Request, response: Response) {
    const allLabsUseCase = new AllLabsUseCase();
    const lab = await allLabsUseCase.execute();
    return response.json(lab);
  }
}
export default AllLabsController;
