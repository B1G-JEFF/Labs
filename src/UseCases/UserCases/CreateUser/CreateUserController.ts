import { Request, Response } from "express";
import CreateUserUseCase from "./CreateUserUseCase";

class CreateUserConstroller {
  async handle(request: Request, response: Response) {
    const { firstName, lastName, email, password } = request.body;

    const createUserUseCase = new CreateUserUseCase();

    const createUser = await createUserUseCase.execute({
      firstName,
      lastName,
      email,
      password,
    });

    return response.json(createUser)
  }
}
export default CreateUserConstroller