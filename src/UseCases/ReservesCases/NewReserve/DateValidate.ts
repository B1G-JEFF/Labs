import dayjs from "dayjs";
import HourValidate from "./HourValidate";

// tipando os parametros da request
interface IRequest {
  date: string;
  entryTime: string;
  exitTime: string;
  labId: string;
}

class DateValidate {
  async execute({ date, entryTime, exitTime }: IRequest) {
    // verificando o formato da data
    const validateDate = dayjs(date, "YYYY/MM/DD", true);
    if (!validateDate.isValid()) {
      throw new Error(
        "The date format is invalid !!! expected format 'YYYY/MM/DD'"
      );
    }
    // verificando  o formato da hora
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    const validEntryTime = regex.test(entryTime);
    const validExitTime = regex.test(exitTime);

    if (!validEntryTime || !validExitTime) {
      throw new Error(
        "The time format is invalid!!! expected format 'HH:mm' '00:00' '23:59'"
      );
    }

    // dividindo a hora e os minutos
    const [entryHour, entryMinute] = entryTime.split(":");
    const [exitHour, exitMinute] = exitTime.split(":");

    // convertendo para o formato do prisma
    const validDate = validateDate.toISOString();
    const validEntry = validateDate
      .add(parseInt(entryHour), "hour")
      .add(parseInt(entryMinute), "minute")
      .toISOString();

    const validExit = validateDate
      .add(parseInt(exitHour), "hour")
      .add(parseInt(exitMinute), "minute")
      .toISOString();

    // verificando se a data e valido , ele nao pode ser anterior a agora
    if (dayjs(validDate).isBefore(dayjs(), "day")) {
      throw new Error(
        "invalid date it is not possible to book a day before today"
      );
    }
    // verificando se o horario e valido , ele nao pode ser anterior a agora
    if (
      dayjs(validEntry).isBefore(dayjs()) ||
      dayjs(validExit).isBefore(dayjs())
    ) {
      throw new Error(
        "invalid hour it is not possible to schedule a day before now"
      );
    }

    // validando as horas e se a reserva pode ser criada 
    const hourValidate = new HourValidate();

    await hourValidate.execute(validDate, validEntry, validExit);

    // caso esteja tudo ok ele retorna os inputs validos
    return { validDate, validEntry, validExit };
  }
}

export default DateValidate;
