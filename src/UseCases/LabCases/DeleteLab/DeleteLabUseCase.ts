import client from "../../../prisma/client";

class DeleteLabUseCase{
    async execute(id:string){
        await client.labs.delete({where:{id}})
        return {mensage:"Lab deleted successfully"}
    }
}

export default DeleteLabUseCase