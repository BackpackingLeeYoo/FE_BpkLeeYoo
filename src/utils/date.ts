import dayjs from "dayjs";

export const dateFormat = (date: number) => {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};
