import dayjs from "dayjs";
import client from "../../../prisma/client";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

class HourValidate {
  async execute(date: string, entryTime: string, exitTime: string) {
    
    const findDay = await client.reserve.findMany({ where: { date } });

    if (findDay.length == 0) {
      return;
    }

    for (let index = 0; index < findDay.length; index++) {
      let start = dayjs(findDay[index].entryTime);
      let end = dayjs(findDay[index].exitTime);

      const checkEntry = dayjs(entryTime).isBetween(start, end, "minute", "()");
      const checkExit = dayjs(exitTime).isBetween(start, end, "minute", "()");

      if (checkEntry == true) {
        throw new Error("entry hour is ivalid already ocuped");
      } else if (checkExit == true) {
        throw new Error("exit hour is ivalid already ocuped");
      }
    }
  }
}
export default HourValidate;
