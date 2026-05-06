import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import styles from "./AddSchedule.module.css";
import { useState } from "react";
function AddSchedule({ data, onUpdate, onRemove }) {
  const days = [
    { val: "monday", label: "Thứ 2" },
    { val: "tuesday", label: "Thứ 3" },
    { val: "wednesday", label: "Thứ 4" },
    { val: "thursday", label: "Thứ 5" },
    { val: "friday", label: "Thứ 6" },
    { val: "saturday", label: "Thứ 7" },
    { val: "sunday", label: "Chủ nhật" },
  ];
  const [dayOfWeek, setDayOfWeek] = useState(days[0].val);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputgroup}>
        <label>Ngày trong tuần</label>
        <select
          value={data.dayOfWeek}
          onChange={(e) => onUpdate(data.id, "dayOfWeek", e.target.value)}
          required
          onInvalid={(e) =>
            e.target.setCustomValidity("Vui lòng chọn thứ trong tuần")
          }
          onInput={(e) => e.target.setCustomValidity("")}
        >
          {days.map((item) => {
            return (
              <option key={item.val} value={item.val}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles.inputgroup}>
        <label>Thời gian bắt đầu</label>
        <input
          type="time"
          value={data.startTime}
          onChange={(e) => onUpdate(data.id, "startTime", e.target.value)}
          onInvalid={(e) =>
            e.target.setCustomValidity("Vui lòng chọn thời gian bắt đầu")
          }
          onInput={(e) => e.target.setCustomValidity("")}
          required
        />
      </div>
      <div className={styles.inputgroup}>
        <label>Thời gian kết thúc</label>
        <input
          type="time"
          value={data.endTime}
          onChange={(e) => onUpdate(data.id, "endTime", e.target.value)}
          required
          onInvalid={(e) =>
            e.target.setCustomValidity("Vui lòng chọn thời gian kết thúc")
          }
          onInput={(e) => e.target.setCustomValidity("")}
        />
      </div>
      <div className={styles.action}>
        <FontAwesomeIcon icon={faTrashCan} onClick={() => onRemove(data.id)} />
      </div>
    </div>
  );
}
export default AddSchedule;
