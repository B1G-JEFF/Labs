import client from "../../../prisma/client";

class ClassShudulesUseCase {
  async execute(schudules: string, intervals: string) {
    // converto as strings para um arr
    const arrSchudules = schudules.split("-");
    const arrIntervals = intervals.split("-");

    // converto o arrIntervals para um array de objetos com um horario de inicio e um de fim
    const parsedIntervals = arrIntervals.map((interval) => {
      const [start, end] = interval.split("/");
      return { start, end };
    });

    const validate = await client.classSchudules.findMany();

    // regex que verifica o formato de horas
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    // verifico o formato das horas de aula
    arrSchudules.forEach((arrSchudules) => {
      if (!regex.test(arrSchudules)) {
        throw new Error("the hour format is ivalid ");
      }
    });

    // verifico o formato de horas do intervalo
    parsedIntervals.forEach((parsedIntervals) => {
      if (
        !regex.test(parsedIntervals.start) ||
        !regex.test(parsedIntervals.end)
      ) {
        throw new Error("the hour format is ivalid ");
      }
    });

    for (let i = 0; i < parsedIntervals.length; i++) {
      if (
        !arrSchudules.includes(parsedIntervals[i].start) ||
        !arrSchudules.includes(parsedIntervals[i].end)
      ) {
        throw new Error("interval hour not found in schudules")
      }
    }

    if (validate.length >= 1) {
      throw new Error(
        "A class schedule already exists, delete the other one to create a new one"
      );
    }

    const hours = await client.classSchudules.create({
      data: { schudules, intervals },
    });

    return hours;
  }
}

export default ClassShudulesUseCase;
