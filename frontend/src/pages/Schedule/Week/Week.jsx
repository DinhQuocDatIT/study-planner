import styles from "./Week.module.css";
import { useState } from "react";
import dayjs from "dayjs";
import { range } from "lodash-es";
import Button from "../../../components/ui/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import TaskItem from "../../../components/Tasks/TaskItem/TaskItem";
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
    deadline: "2026-05-09T08:00:00",

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
    deadline: "2026-05-10T19:00:00",

    subject: {
      id: 4,
      name: "Tiếng Anh chuyên ngành",
      color: "#06b6d4",
    },

    description: "Nghe 5 đoạn hội thoại về chủ đề Network",
  },
  {
    id: 5,
    taskName: "Vẽ sơ đồ ERD",
    priority: "medium",
    status: "todo",
    deadline: "2026-05-11T10:03:00",

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
    deadline: "2026-05-06T14:00:00",

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
    deadline: "2026-05-11T10:30:00",

    subject: {
      id: 1,
      name: "Lập trình Java",
      color: "#f97316",
    },

    description: "Xử lý lỗi JWT hết hạn không tự refresh",
  },
];
function Week() {
  const [dayObj, setDayObj] = useState(dayjs());
  const thisDay = dayObj.day();
  const progress = 68;
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push({
      value: i,
      label: i === 0 ? "Chủ nhật" : `Thứ ${i + 1}`,
      date: dayObj.add(i - thisDay, "day"),
    });
  }
  const handlePrev = () => {
    setDayObj((prev) => prev.subtract(7, "day"));
  };

  const handleNext = () => {
    setDayObj((prev) => prev.add(7, "day"));
  };
  const getTaskByDate = (date) => {
    return tasks.filter((item) => dayjs(item.deadline).isSame(date, "day"));
  };

  const taskMap = {};

  tasks.forEach((task) => {
    const key = dayjs(task.deadline).format("YYYY-MM-DD");
    if (!taskMap[key]) {
      taskMap[key] = [];
    }
    taskMap[key].push(task);
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.calendarBoard}>
        <div className={styles.header}>
          {days.map((i) => (
            <div className={styles.headerItem} key={i.value}>
              <div className={styles.dayLabel}>{i.label}</div>

              <div className={styles.dayDate}>
                {i.date.date()}/{i.date.month() + 1}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.content}>
          {days.map((i) => {
            const key = i.date.format("YYYY-MM-DD");
            const dayTasks = taskMap[key] || [];

            return (
              <div
                className={`${styles.taskList}  ${dayjs().isSame(i.date, "day") ? styles.today : ""} `}
                key={i.value}
              >
                {dayTasks.map((item) => {
                  const time = dayjs(item.deadline).format("HH:mm");
                  return <TaskItem task={item} key={item.id} variant="list" />;
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.calendarSidebar}>
        <div className={styles.calendarNavigation}>
          <Button variant="outline" type="button" onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <Button type="button" onClick={() => setDayObj(dayjs())}>
            Hiện tại
          </Button>
          <Button variant="outline" type="button" onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </div>
        <div className={styles.stats}>
          <div className={styles.infor}>
            <div className={styles.progressiTnfor}>
              {progress}
              <span> %</span>
            </div>
            <div className={styles.titleInfor}>Đã hoàn thành trong tuần</div>
          </div>
          <div
            className={styles.progress}
            style={{
              background: `conic-gradient( #000000 ${progress}%, #dadada ${progress}%)`,
            }}
          >
            <div>
              <FontAwesomeIcon icon={faArrowTrendUp} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Week;
