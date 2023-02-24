import client from "../../../prisma/client";
import DateValidate from "./DateValidate";

interface IRequest {
  labId: string;
  userId: string;
  date: string;
  entryTime: string;
  exitTime: string;
}

class NewReserveUseCase {
  async execute({ labId, userId, date, entryTime, exitTime }: IRequest) {
    const user = await client.user.findFirst({ where: { id: userId } });
    const lab = await client.labs.findFirst({ where: { id: labId } });

    if (!user) {
      throw new Error("User not found");
    }

    if (!lab) {
      throw new Error("lab not found");
    }

    const validDate = new DateValidate();

    const time = validDate.execute({ date, entryTime, exitTime });

    // const create = await client.reserve.create({
    //   data: {
    //     date,
    //     entryTime,
    //     exitTime,
    //     user: { connect: { id: userId } },
    //     lab: { connect: { id: labId } },
    //   },
    // });
    // return create;

    return "ok";
  }
}

export default NewReserveUseCase;
