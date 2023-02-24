import client from "../../../prisma/client";

class DeleteUserUseCase {
  async execute(id: string) {
    const user = await client.user.findFirst({ where: { id } });
    if(!user){
        throw new Error("User not found");
    }

    await client.user.delete({where:{id}})

    return {mensage:"User deleted successfully"}
  }
}

export default DeleteUserUseCase;
