import { useState } from "react";
import styles from "./Month.module.css";
import dayjs from "dayjs";
import { range } from "lodash-es";
import Button from "../../../components/ui/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import TaskItem from "../../../components/Tasks/TaskItem/TaskItem";
import { TASK_ITEM_VARIANTS } from "../../../constants/taskItemVariants";
const tasks = [
  {
    id: 1,
    taskName: "Fix bug API Login",
    priority: "high",
    status: "in-progress",
    deadline: "2026-05-07T23:59:59",

    subject: {
      id: 1,
      name: "Lập trình Java",
      color: "#f97316",
    },

    description: "Xử lý lỗi JWT hết hạn không tự refresh",
  },
  {
    id: 2,
    taskName: "Thiết kế giao diện Dashboard",
    priority: "medium",
    status: "in-progress",
    deadline: "2026-05-08T18:00:00",

    subject: {
      id: 2,
      name: "UI/UX Design",
      color: "#3b82f6",
    },

    description: "Hoàn thiện layout thống kê và biểu đồ",
  },
  {
    id: 3,
    taskName: "Làm bài tập tích phân",
    priority: "high",
    status: "todo",
    deadline: "2026-05-12T08:00:00",

    subject: {
      id: 3,
      name: "Toán cao cấp",
      color: "#ef4444",
    },

    description: "Giải bài tập chương 3 sách bài tập",
  },
  {
    id: 4,
    taskName: "Luyện nghe Part 1",
    priority: "medium",
    status: "todo",
    deadline: "2026-05-12T10:03:00",

    subject: {
      id: 4,
      name: "Tiếng Anh chuyên ngành",
      color: "#00687b",
    },

    description: "Nghe 5 đoạn hội thoại về chủ đề Network",
  },
  {
    id: 5,
    taskName: "Vẽ sơ đồ ERD",
    priority: "medium",
    status: "todo",
    deadline: "2026-05-12T10:03:00",

    subject: {
      id: 5,
      name: "Cơ sở dữ liệu",
      color: "#e8deff",
    },

    description: "Thiết kế bảng cho hệ thống quản lý thư viện",
  },
  {
    id: 6,
    taskName: "Ôn tập lý thuyết tích phân",
    priority: "low",
    status: "completed",
    deadline: "2026-05-12T14:00:00",

    subject: {
      id: 3,
      name: "Toán cao cấp",
      color: "#ef4444",
    },

    description: "Xem lại các công thức nguyên hàm cơ bản",
  },
  {
    id: 7,
    taskName: "Cài đặt MySQL",
    priority: "low",
    status: "completed",
    deadline: "2026-05-05T09:00:00",

    subject: {
      id: 5,
      name: "Cơ sở dữ liệu",
      color: "#8b5cf6",
    },

    description: "Setup database cho project quản lý thư viện",
  },
  {
    id: 8,
    taskName: "Fix bug API Login",
    priority: "high",
    status: "in-progress",
    deadline: "2026-05-12T16:30:00",

    subject: {
      id: 1,
      name: "Lập trình Java",
      color: "#f97316",
    },

    description: "Xử lý lỗi JWT hết hạn không tự refresh",
  },
];

const days = [
  {
    val: 0,
    label: "CN",
  },
  {
    val: 1,
    label: "T2",
  },
  {
    val: 2,
    label: "T3",
  },

  {
    val: 3,
    label: "T4",
  },
  {
    val: 4,
    label: "T5",
  },
  {
    val: 5,
    label: "T6",
  },
  {
    val: 6,
    label: "T7",
  },
];
function Month() {
  const [dayObj, setDayObj] = useState(dayjs());

  const todayObj = dayjs();
  const thisYear = dayObj.year();
  const thisMonth = dayObj.month();
  const daysInMonth = dayObj.daysInMonth();

  const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`);
  const weekDayOf1 = dayObjOf1.day();

  const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`);
  const weekDayOfLast = dayObjOfLast.day();

  const handlePrev = () => {
    setDayObj((prev) => prev.subtract(1, "month"));
  };
  const handleNext = () => {
    setDayObj((prev) => prev.add(1, "month"));
  };

  const getTasksByDate = (date) => {
    return tasks.filter((task) => dayjs(task.deadline).isSame(date, "day"));
  };
  const taskListOfDay = getTasksByDate(todayObj);
  return (
    <div className={styles.wrapper}>
      <div className={styles.calendarBoard}>
        <div className={styles.header}>
          {days.map((day) => {
            return <div key={day.val}>{day.label}</div>;
          })}
        </div>
        <div className={styles.gird}>
          {range(weekDayOf1).map((i) => (
            <div
              className={`${styles.dayCell}  ${styles.dayCellFaded}`}
              key={i}
            >
              <div className={styles.dayNumber}>
                {dayObjOf1.subtract(weekDayOf1 - i, "day").date()}
              </div>
            </div>
          ))}
          {range(daysInMonth).map((i) => {
            const currentDate = dayjs(`${thisYear}-${thisMonth + 1}-${i + 1}`);
            const tasksOfDay = getTasksByDate(currentDate);
            return (
              <div
                className={`${styles.dayCell} ${styles.dayCellInMonth} ${
                  i + 1 === todayObj.date() &&
                  thisMonth === todayObj.month() &&
                  thisYear === todayObj.year()
                    ? styles.dayCellToday
                    : ""
                }`}
                key={i}
              >
                <div className={styles.dayNumber}>{i + 1}</div>
                <div className={styles.taskList}>
                  {tasksOfDay.map((task) => (
                    <TaskItem
                      task={task}
                      key={task.id}
                      variant={TASK_ITEM_VARIANTS.COMPACT}
                    />
                  ))}
                </div>
              </div>
            );
          })}
          {range(6 - weekDayOfLast).map((i) => (
            <div className={`${styles.dayCell} ${styles.dayCellFaded}`} key={i}>
              <div className={styles.dayNumber}>
                {dayObjOfLast.add(i + 1, "day").date()}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.calendarSidebar}>
        <div className={styles.calendarNavigation}>
          <Button variant="outline" onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <Button variant="outline" onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
          <div className={styles.currentDate}>
            {dayObj.format("MMM DD YYYY")}
          </div>
        </div>

        <div className={styles.todayHighligh}>
          <span className={styles.todayHighlighTitle}>Tiêu điểm: hôm nay</span>
          <div className={styles.taskListCard}>
            {taskListOfDay.map((item) => {
              return (
                <TaskItem task={item} variant={TASK_ITEM_VARIANTS.DEFAULT} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Month;
