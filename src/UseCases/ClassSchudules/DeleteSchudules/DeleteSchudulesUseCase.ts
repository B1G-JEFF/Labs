import client from "../../../prisma/client";




class DeleteSchudulesUseCase {
  async execute(id : string ) {

    const find = await client.classSchudules.findFirst({where:{id}})
    
    if(!find){
      throw new Error("Class schudules not found")
    }

    await client.classSchudules.delete({where:{id}})

  }
}

export default DeleteSchudulesUseCase;
