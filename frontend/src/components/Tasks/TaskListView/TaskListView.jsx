import styles from "./TaskListView.module.css";
import {
  faAngleDown,
  faArrowDown,
  faArrowUp,
  faPlus,
  faPrint,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlarmClock, faCalendar } from "@fortawesome/free-regular-svg-icons";
import TaskItem from "../TaskItem/TaskItem";
import { TASK_ITEM_VARIANTS } from "../../../constants/taskItemVariants";
function TaskListView({ currentTasks, upcomingTask, completedTask }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.currently}>
        <div className={styles.currentlyHeader}>
          <FontAwesomeIcon icon={faAlarmClock} />
          <span className={styles.title}>Đang thực hiện</span>
          <span className={styles.count}>{currentTasks.length}</span>
        </div>
        <div className={styles.taskList}>
          {currentTasks.map((item) => {
            return (
              <TaskItem
                key={item.id}
                task={item}
                variant={TASK_ITEM_VARIANTS.DETAILED}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.upcoming}>
        <div className={styles.upcomingHeader}>
          <FontAwesomeIcon icon={faCalendar} />
          <span className={styles.title}>Sắp tới</span>
          <span className={styles.count}>{upcomingTask.length}</span>
        </div>
        <div className={styles.taskList}>
          {upcomingTask.map((item) => {
            return (
              <TaskItem
                key={item.id}
                task={item}
                variant={TASK_ITEM_VARIANTS.DETAILED}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.completed}>
        <div className={styles.completedHeader}>
          <FontAwesomeIcon icon={faAlarmClock} />
          <span className={styles.title}>Đang thực hiện</span>
          <span className={styles.count}>{completedTask.length}</span>
        </div>
        <div className={styles.taskList}>
          {completedTask.map((item) => {
            return (
              <TaskItem
                key={item.id}
                task={item}
                variant={TASK_ITEM_VARIANTS.DETAILED}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default TaskListView;
