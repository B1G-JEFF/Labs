import dayjs, { Dayjs } from "dayjs";
import client from "../../../prisma/client";
import isBetween from "dayjs/plugin/isBetween";
import AllClassSchudulesUseCase from "../../ClassSchudules/NewSchudules/ClassSchudulesUsecase";

dayjs.extend(isBetween);

class HourValidate {
  async execute(date: string, entryTime: string, exitTime: string) {
    //busco o dia que foi passado no input caso ele nao encontre ele retorna
    const findDay = await client.reserve.findMany({ where: { date } });

    // valido se o horario de entrada e o mesmo de saida
    if (entryTime === exitTime) {
      throw new Error("The entry time cannot be the same as the exit time");
    }

    if(dayjs(exitTime).isBefore(dayjs(entryTime))){
      throw new Error("The exit time cannot is before entry time")
    }

    // busco os horaios de aula no BD
    const classSchudueles = new AllClassSchudulesUseCase();
    const schudules = await classSchudueles.execute();

    // converto eles para array
    const validschudules = schudules.schudules.split("-");
    const interval = schudules.intervals.split("-");

    const validInterval = interval.map((interval) => {
      const [start, end] = interval.split("/");
      return { start, end };
    });

    for (let i of validInterval) {

      if (dayjs(entryTime).format("HH:mm") == i.start) {
        throw new Error(
          "Entry time cannot be the same as the interval start time"
        );
      }
      if (dayjs(exitTime).format("HH:mm") == i.end) {
        throw new Error(
          "The end time cannot be the same as the break end time."
        );
      }
    }

    // busco no horario de aula se o horario de entrada e os de saida sao validos
    const verifyValidEntry = validschudules.indexOf(
      dayjs(entryTime).format("HH:mm")
    );
    const verifyValidExit = validschudules.indexOf(
      dayjs(exitTime).format("HH:mm")
    );

    if (verifyValidEntry == -1 || verifyValidExit == -1) {
      throw new Error("The hour is invalid!");
    }

    //caso o horaio de aula seja valido mas nao tenha
    // nem uma outra reserva naquele dia ele retorna

    if (findDay.length == 0) {
      return;
    }

    // verifico se o horario de entrada e saida ja estao ocupados
    const entryHourAlreadyOcuped = findDay.filter(
      (findDay) => findDay.entryTime.toISOString() == entryTime
    );

    const exitHourAlreadyOcuped = findDay.filter(
      (findDay) => findDay.exitTime.toISOString() == exitTime
    );

    if (entryHourAlreadyOcuped.length >= 1) {
      throw new Error("Entry hour is invalid already occuped");
    }

    if (exitHourAlreadyOcuped.length >= 2) {
      throw new Error("Exit hour is invalid already occuped");
    }

    // verifico se os horarios validos nao estao entre nem um outro
    for (let index = 0; index < findDay.length; index++) {
      let start = dayjs(findDay[index].entryTime);
      let end = dayjs(findDay[index].exitTime);

      const checkEntry = dayjs(entryTime).isBetween(start, end, "minute", "()");
      const checkExit = dayjs(exitTime).isBetween(start, end, "minute", "()");

      if (checkEntry == true) {
        throw new Error("Entry hour is invalid already occuped");
      } else if (checkExit == true) {
        throw new Error("Exit hour is invalid already occuped");
      }
    }
  }
}
export default HourValidate;
