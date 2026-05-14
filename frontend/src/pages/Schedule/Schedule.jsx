import { useState } from "react";
import styles from "./Schedule.module.css";
import Day from "./Day/Day";
import Week from "./Week/Week";
import Month from "./Month/Month";
import DateFormatter from "../../utils/DateFormatter";
import dayjs from "dayjs";

const timeUnitOptions = [
  { value: "day", label: "Ngày" },
  { value: "week", label: "Tuần" },
  { value: "month", label: "Tháng" },
];
function Schedule() {
  const [active, setActive] = useState(timeUnitOptions?.[0]);

  const options = {
    day: <Day />,
    week: <Week />,
    month: <Month />,
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h2>{DateFormatter.fullDate(dayjs())}</h2>
          </div>
          <div className={styles.actions}>
            <div>
              {timeUnitOptions.map((item) => {
                return (
                  <button
                    className={`${active.value == item.value ? styles.active : ""}`}
                    type="button"
                    key={item.value}
                    onClick={() => setActive(item)}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>{options[active.value]}</div>
    </div>
  );
}
export default Schedule;
