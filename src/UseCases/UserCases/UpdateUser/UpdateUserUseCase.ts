import client from "../../../prisma/client";

interface IUpdate {
  id: string;
  firstName: string;
  lastName: string;
}

class UpdateUserUseCase {
  async execute({ id, firstName, lastName}: IUpdate) {
    const user = await client.user.findFirst({ where: { id } });
    if (!user) {
      throw new Error("User not found");
    }

    const updateUser = await client.user.update({
      where: { id },
      data: { firstName, lastName,},
      select: {
        email: true,
        firstName: true,
        lastName: true,
        id: true,
      },
    });
    return updateUser
  }
}

export default UpdateUserUseCase;
