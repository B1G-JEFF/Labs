
import dayjs from "dayjs";
import AllReservesUseCase from "../AllReserves/AllReservesUseCase";
import InNextWeek from "./InNextWeek";

class NextWeekUseCase {
  async execute() {
    const allreserves = new AllReservesUseCase();
    const inNextWeek = new InNextWeek()
    const rawData = await allreserves.execute();

    const data = rawData.filter(async (rawData)=>{
      if(await inNextWeek.execute(rawData.date.toString())){
          return rawData
      }
    })
    

    return data;
  }
}

export default NextWeekUseCase;
