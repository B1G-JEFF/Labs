import client from "../../../prisma/client"

class AllClassSchudulesUseCase{

    async execute(){
     const classSchudules = await client.classSchudules.findFirst()
     return classSchudules
    }

}

export default AllClassSchudulesUseCase