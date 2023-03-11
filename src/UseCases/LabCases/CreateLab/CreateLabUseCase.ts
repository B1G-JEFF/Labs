import client from "../../../prisma/client";

class CreateLabUseCase {
  async execute(name: string, capacity: number) {

    const createLab = await client.labs.create({
      data: { name, capacity },
    });
    return createLab;
  }
  
}
export default CreateLabUseCase;
