import { Request, Response } from "express";
import CreateLabUseCase from "./CreateLabUseCase";

class CreateLabController {
  async handle(request: Request, response: Response) {
    const { name, capacity } = request.body;

    const createLabUseCase = new CreateLabUseCase();

    const lab = await createLabUseCase.execute(name, capacity);

    return response.json({lab})
  }
}

export default CreateLabController;
