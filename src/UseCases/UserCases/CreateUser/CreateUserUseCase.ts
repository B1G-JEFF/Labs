import client from "../../../prisma/client";
import bcrypt from "bcrypt";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  async execute({ firstName, lastName, email, password }: IUser) {
    
    const user = await client.user.findFirst({ where: { email } });

    if (user) {
      throw new Error("User already exists");
    }

    const passwordHash = await bcrypt.hash(password, 8);

    const createUser = await client.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: passwordHash,
      },
    });

    return createUser;
  }
}
export default CreateUserUseCase;
