import client from "../../../prisma/client";

class AllLabsUseCase {
  async execute() {
    const labs = await client.labs.findMany();
    return labs;
  }
}

export default AllLabsUseCase;
