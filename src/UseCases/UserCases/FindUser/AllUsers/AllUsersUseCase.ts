import client from "../../../../prisma/client";

class AllUsersUseCase {
  async execute() {
    const allUsers = await client.user.findMany();

    if(allUsers.length == 0 ) {
      throw new Error("Could not find any user");
    }

    return allUsers;
  }
}

export default AllUsersUseCase;
