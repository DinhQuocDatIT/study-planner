import Button from "../../../components/ui/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Day.module.css";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
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
function Day() {
  const [dayObj, setDayObj] = useState(dayjs());
  const now = dayjs();
  const progress = 70;
  const taskMap = useMemo(() => {
    const hourMap = Array.from({ length: 24 }, () => []);

    tasks.forEach((task) => {
      const deadline = dayjs(task.deadline);

      if (!deadline.isSame(dayObj, "day")) return;

      hourMap[deadline.hour()].push({
        ...task,
        parsedDeadline: deadline,
      });
    });

    hourMap.forEach((tasksInHour) => {
      tasksInHour.sort((a, b) => a.parsedDeadline.diff(b.parsedDeadline));
    });

    return hourMap;
  }, [dayObj, tasks]);
  const handlePrev = () => {
    setDayObj((prev) => prev.subtract(1, "day"));
  };
  const handleNext = () => {
    setDayObj((prev) => prev.add(1, "day"));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.calendarBoard}>
        {taskMap.map((hour, index) => {
          const isCurrently =
            index === now.hour() && dayObj.isSame(now, "day") ? true : false;

          return (
            <div key={index} className={styles.item}>
              <div className={styles.hour}>{index}:00</div>
              <div
                className={`${styles.taskList} ${isCurrently ? styles.currently : ""}`}
              >
                {hour.map((task) => {
                  return (
                    <TaskItem key={task.id} task={task} variant={TASK_ITEM_VARIANTS.DETAILED} />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.calendarSidebar}>
        <div className={styles.calendarNavigation}>
          <Button variant="outline" type="button" onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <Button type="button" onClick={() => setDayObj(now)}>
            Hiện tại
          </Button>
          <Button variant="outline" type="button" onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </div>
        <div className={styles.currentlyDate}>
          <p className={styles.currentlyDateLabel}>Ngày đang chọn:</p>

          <p className={styles.currentlyDateValue}>
            {dayObj.format("DD-MM-YYYY")}
          </p>
        </div>
        <div className={styles.dailyProgress}>
          <p className={styles.dailyProgressTitle}>
            Tiến độ hoàn thành trong ngày
          </p>
          <div className={styles.dailyProgressContent}>
            <div className={styles.dailyProgressStats}>
              <span className={styles.dailyProgressPercent}>
                54% Hoàn thành
              </span>
              <span className={styles.dailyProgressTime}>4/7 giờ</span>
            </div>
            <div className={styles.dailyProgressBar}>
              <div style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Day;
