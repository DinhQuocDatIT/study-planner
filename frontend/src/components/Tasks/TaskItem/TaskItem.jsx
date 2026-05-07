import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TaskItem.module.css";
import {
  faCalendar,
  faCalendarCheck,
} from "@fortawesome/free-regular-svg-icons";
import { PRIORITIES } from "../../../constants/priorities";
function TaskItem({ task }) {
  const priority = PRIORITIES.find((p) => p.val === task.priority);
  const formattedDeadline = new Date(task.deadline).toLocaleDateString(
    "vi-VN",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    },
  );

  return (
    <div className={styles.wrapper}>
      <input type="checkbox" className={styles.taskCheckbox} />
      <div className={styles.taskContent}>
        <div className={styles.taskHeader}>
          <span className={styles.taskName}>{task.taskName}</span>
          <span
            className={styles.priority}
            style={{
              color: priority.color,
              backgroundColor: `${priority?.color}20`,
            }}
          >
            {priority?.label}
          </span>
        </div>
        <div className={styles.taskDetails}>
          <span className={styles.subjectName}>
            <div
              className={styles.dot}
              style={{ backgroundColor: task.subject.color }}
            ></div>
            {task.subject.name}
          </span>

          <span className={styles.deadline}>
            <FontAwesomeIcon
              icon={task.status === "completed" ? faCalendarCheck : faCalendar}
            />

            {formattedDeadline}
          </span>
        </div>
      </div>
    </div>
  );
}
export default TaskItem;
