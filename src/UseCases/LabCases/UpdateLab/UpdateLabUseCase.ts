import client from "../../../prisma/client";

class UpdateLabUseCase {
  async execute(id: string, name: string, capacity: number) {
    const updateData = await client.labs.update({
      where: { id },
      data: { name, capacity },
    });
    return updateData;
  }
}

export default UpdateLabUseCase;
