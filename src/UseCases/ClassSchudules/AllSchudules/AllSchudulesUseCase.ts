import client from "../../../prisma/client"





class AllClassSchudules{
    async execute(){
        
        const schudules = await client.classSchudules.findFirst()
        
        return schudules

    }
}

export default AllClassSchudules