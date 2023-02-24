import { Request, Response } from "express";
import AllUsersUseCase from "./AllUsersUseCase";
class AllUsersController {
  async handle(request: Request, response: Response) {
    const allUsersUseCase = new AllUsersUseCase();

    const users = await allUsersUseCase.execute();
    return response.json(users);
  }
}

export default AllUsersController;
