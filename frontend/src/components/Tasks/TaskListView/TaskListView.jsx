import styles from "./TaskListView.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faClock,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import TaskItem from "../TaskItem/TaskItem";
import { TASK_ITEM_VARIANTS } from "../../../constants/taskItemVariants";

function TaskListView({
  highPriorityTasks,
  mediumPriorityTasks,
  lowPriorityTasks,
}) {
  return (
    <div className={styles.wrapper}>
      {/* High Priority */}
      <div className={styles.highPriority}>
        <div className={styles.sectionHeader}>
          <FontAwesomeIcon icon={faTriangleExclamation} />
          <span className={styles.title}>Ưu tiên cao</span>
          <span className={styles.count}>{highPriorityTasks.length}</span>
        </div>

        <div className={styles.taskList}>
          {highPriorityTasks.map((item) => (
            <TaskItem
              key={item.id}
              task={item}
              variant={TASK_ITEM_VARIANTS.DETAILED}
            />
          ))}
        </div>
      </div>

      {/* Medium Priority */}
      <div className={styles.mediumPriority}>
        <div className={styles.sectionHeader}>
          <FontAwesomeIcon icon={faClock} />
          <span className={styles.title}>Ưu tiên trung bình</span>
          <span className={styles.count}>{mediumPriorityTasks.length}</span>
        </div>

        <div className={styles.taskList}>
          {mediumPriorityTasks.map((item) => (
            <TaskItem
              key={item.id}
              task={item}
              variant={TASK_ITEM_VARIANTS.DETAILED}
            />
          ))}
        </div>
      </div>

      {/* Low Priority */}
      <div className={styles.lowPriority}>
        <div className={styles.sectionHeader}>
          <FontAwesomeIcon icon={faCircleCheck} />
          <span className={styles.title}>Ưu tiên thấp</span>
          <span className={styles.count}>{lowPriorityTasks.length}</span>
        </div>

        <div className={styles.taskList}>
          {lowPriorityTasks.map((item) => (
            <TaskItem
              key={item.id}
              task={item}
              variant={TASK_ITEM_VARIANTS.DETAILED}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskListView;
