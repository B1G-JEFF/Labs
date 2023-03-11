import client from "../../../prisma/client";

class FindUserUseCase {
  async findID(id: string) {
    const findUser = await client.user.findUnique({ where: { id } });

    if (!findUser) {
      throw new Error("Could not find any user");
    }

    return findUser;
  }

  async findRole(role: string) {
    if (!["student", "teacher", "admin"].includes(role)) {
      throw new Error("Role is invalid");
    }

    const findRole = await client.user.findMany({ where: { role } });

    if (findRole.length == 0) {
      throw new Error("no user has this role");
    }

    return findRole;
  }
}

export default FindUserUseCase;
