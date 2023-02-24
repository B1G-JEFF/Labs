import dayjs from "dayjs";

interface IRequest {
  date: string;
  entryTime: string;
  exitTime: string;
}

class DateValidate {
  execute({ date, entryTime, exitTime }: IRequest) {
    const validateDate = dayjs(date, "YYYY/MM/DD", true);
    if (!validateDate.isValid()) {
      throw new Error(
        "The date format is invalid !!! expected format 'YYYY/MM/DD'"
      );
    }

    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    const validEntryTime = regex.test(entryTime);
    const validExitTime = regex.test(exitTime);

    if (!validEntryTime || !validExitTime) {
      throw new Error("The time format is invalid!!! expected format 'HH:mm'");
    }

    const [entryHour, entryMinute] = entryTime.split(":");
    const [exitHour, exitMinute] = exitTime.split(":");

    const validDate = validateDate.toISOString();
    const validEntry = validateDate
      .add(parseInt(entryHour), "hour")
      .add(parseInt(entryMinute), "minute")
      .toISOString();

    const validExit = validateDate
      .add(parseInt(exitHour), "hour")
      .add(parseInt(exitMinute), "minute")
      .toISOString();

    return { validDate, validEntry, validExit };
  }
}

export default DateValidate;
