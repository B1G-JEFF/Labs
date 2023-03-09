import client from "../../../prisma/client";
import DateValidate from "./DateValidate";


// tipo os inputs 
interface IRequest {
  labId: string;
  userId: string;
  date: string;
  entryTime: string;
  exitTime: string;
}

class NewReserveUseCase {

  async execute({ labId, userId, date, entryTime, exitTime }: IRequest) {
    
    // verifico se o lab e o user existem   
    const user = await client.user.findFirst({ where: { id: userId } });
    const lab = await client.labs.findFirst({ where: { id: labId } });

    if (!user) {
      throw new Error("User not found");
    }

    if (!lab) {
      throw new Error("lab not found");
    }
    
    //valido o formato dos inputs    
    const ValidDate = new DateValidate();

    const { validDate, validEntry, validExit } =await  ValidDate.execute({
      date,
      entryTime,
      exitTime,
      labId
    });

    //caso seja valido ele cria o 
    
    const create = await client.reserve.create({
      data: {
        date: validDate,
        entryTime: validEntry,
        exitTime: validExit,
        user: { connect: { id: userId } },
        lab: { connect: { id: labId } },
      },
    });
    
    return create;
  }
}

export default NewReserveUseCase;
