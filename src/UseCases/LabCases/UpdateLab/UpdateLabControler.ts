import { Request, Response } from "express";
import client from "../../../prisma/client";
import UpdateLabUseCase from "./UpdateLabUseCase";

class UpdateLabController {
  async handle(request: Request, response: Response) {
    const { id, name, capacity } = request.body;

    const lab = await client.labs.findFirst({ where: { id } });
    if (!lab) {
      return response.json({ status: "Error", mensage: "lab is not found" });
    }

    const updateLabUseCase = new UpdateLabUseCase();

    const updateLab = await updateLabUseCase.execute(id, name, capacity);

    return response.json(updateLab);
  }
}

export default UpdateLabController;
