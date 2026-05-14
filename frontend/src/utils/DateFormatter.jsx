import dayjs from "dayjs";

dayjs.locale("vi");
class DateFormatter {
  static formatDate = (date) => {
    return dayjs(date).format("DD [TH]MM, HH:mm");
  };
  static fullDate(date) {
    return dayjs(date).format("DD [tháng] MM [năm] YYYY");
  }
  static formatDeadline = (date) => {
    const target = dayjs(date);
    const now = dayjs();

    if (target.isSame(now, "day")) {
      return `Hôm nay, ${target.format("HH:mm")}`;
    }

    if (target.isSame(now.add(1, "day"), "day")) {
      return `Ngày mai, ${target.format("HH:mm")}`;
    }

    if (target.isSame(now.subtract(1, "day"), "day")) {
      return `Hôm qua, ${target.format("HH:mm")}`;
    }

    return target.format("DD [Th]MM, HH:mm");
  };
}
export default DateFormatter;
