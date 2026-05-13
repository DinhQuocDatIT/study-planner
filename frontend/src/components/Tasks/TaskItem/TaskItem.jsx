import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TaskItem.module.css";
import {
  faCalendar,
  faCalendarCheck,
} from "@fortawesome/free-regular-svg-icons";
import { PRIORITIES } from "../../../constants/priorities";
import dayjs from "dayjs";
import { TASK_ITEM_VARIANTS } from "../../../constants/taskItemVariants";
import { useState } from "react";
import TaskDetail from "../TaskDetail/TaskDetail";
function TaskItem({ task, variant = TASK_ITEM_VARIANTS.DEFAULT }) {
  const priority = PRIORITIES.find((p) => p.val === task.priority);
  const formattedDeadline = dayjs(task.deadline).format("MMM DD YYYY");
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow((prev) => !prev);
  };
  switch (variant) {
    case TASK_ITEM_VARIANTS.COMPACT:
      return (
        <div className={styles.compactWrapper} onClick={handleShow}>
          {isShow && (
            <TaskDetail task={task} onClose={() => setIsShow(false)} />
          )}
          <div
            className={styles.dot}
            style={{ backgroundColor: `${task.subject.color}` }}
          ></div>
          <span className={styles.taskName}>{task.taskName}</span>
        </div>
      );

    case TASK_ITEM_VARIANTS.DETAILED:
      return (
        <div className={styles.detailedWrapper}>
          {isShow && (
            <TaskDetail task={task} onClose={() => setIsShow(false)} />
          )}
          <input type="checkbox" className={styles.taskCheckbox} />
          <div className={styles.taskContent} onClick={handleShow}>
            <div className={styles.taskHeader}>
              <span className={styles.taskName}>{task.taskName}</span>

              <span
                className={styles.priority}
                style={{
                  color: priority?.color,
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
                  icon={
                    task.status === "completed" ? faCalendarCheck : faCalendar
                  }
                />

                {formattedDeadline}
              </span>
            </div>
          </div>
        </div>
      );

    case TASK_ITEM_VARIANTS.DEFAULT:
    default:
      return (
        <div className={styles.defaultWrapper}>
          {isShow && (
            <TaskDetail task={task} onClose={() => setIsShow(false)} />
          )}
          <input type="checkbox" className={styles.taskCheckbox} />

          <div className={styles.taskContent} onClick={handleShow}>
            <span className={styles.taskName}>{task.taskName}</span>

            <span className={styles.taskDeadline}>{formattedDeadline}</span>
          </div>
        </div>
      );
  }
}
export default TaskItem;
