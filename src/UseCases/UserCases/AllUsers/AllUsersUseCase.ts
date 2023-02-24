import client from "../../../prisma/client";

class AllUsersUseCase {
  async execute() {
    const allUsers = await client.user.findMany();
    return allUsers;
  }
}

export default AllUsersUseCase;
