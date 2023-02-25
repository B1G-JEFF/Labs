import dayjs from "dayjs";

class InNextWeek {
  async execute(date: string) {
    const today = dayjs();
    const inSevenDays = dayjs().add(7, "day");


    const dateToCompare = dayjs(date);

    const isSameOrAfterToday =
      dateToCompare.isSame(today, "day") || dateToCompare.isAfter(today, "day");
    const isSameOrBeforeInSevenDays =
      dateToCompare.isSame(inSevenDays, "day") ||
      dateToCompare.isBefore(inSevenDays, "day");

    if (isSameOrAfterToday && isSameOrBeforeInSevenDays) {
      return true;
    } else {
      return false;
    }
  }
}

export default InNextWeek