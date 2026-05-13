import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  faAngleDown,
  faArrowDown,
  faArrowUp,
  faPlus,
  faPrint,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Tasks.module.css";
import Button from "../../components/ui/Button/Button";
import FilterDropdown from "../../components/ui/FilterDropdown/FilterDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlarmClock, faCalendar } from "@fortawesome/free-regular-svg-icons";
import TaskItem from "../../components/Tasks/TaskItem/TaskItem";
import { PRIORITIES } from "../../constants/priorities";
import { use, useEffect, useState } from "react";
import { TASK_ITEM_VARIANTS } from "../../constants/taskItemVariants";
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
    deadline: "2026-05-11T10:30:00",

    subject: {
      id: 5,
      name: "Cơ sở dữ liệu",
      color: "#8b5cf6",
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
];
// const currentTasks = [
//   {
//     id: 1,
//     taskName: "Fix bug API Login",
//     priority: "high",
//     status: "in-progress",
//     deadline: "2026-05-07T23:59:59",

//     subject: {
//       id: 1,
//       name: "Lập trình Java",
//       color: "#f97316",
//     },

//     description: "Xử lý lỗi JWT hết hạn không tự refresh",
//   },
//   {
//     id: 2,
//     taskName: "Thiết kế giao diện Dashboard",
//     priority: "medium",
//     status: "in-progress",
//     deadline: "2026-05-08T18:00:00",

//     subject: {
//       id: 2,
//       name: "UI/UX Design",
//       color: "#3b82f6",
//     },

//     description: "Hoàn thiện layout thống kê và biểu đồ",
//   },
// ];
// const upcomingTask = [
//   {
//     id: 3,
//     taskName: "Làm bài tập tích phân",
//     priority: "high",
//     status: "todo",
//     deadline: "2026-05-09T08:00:00",

//     subject: {
//       id: 3,
//       name: "Toán cao cấp",
//       color: "#ef4444",
//     },

//     description: "Giải bài tập chương 3 sách bài tập",
//   },
//   {
//     id: 4,
//     taskName: "Luyện nghe Part 1",
//     priority: "medium",
//     status: "todo",
//     deadline: "2026-05-10T19:00:00",

//     subject: {
//       id: 4,
//       name: "Tiếng Anh chuyên ngành",
//       color: "#06b6d4",
//     },

//     description: "Nghe 5 đoạn hội thoại về chủ đề Network",
//   },
//   {
//     id: 5,
//     taskName: "Vẽ sơ đồ ERD",
//     priority: "medium",
//     status: "todo",
//     deadline: "2026-05-11T10:30:00",

//     subject: {
//       id: 5,
//       name: "Cơ sở dữ liệu",
//       color: "#8b5cf6",
//     },

//     description: "Thiết kế bảng cho hệ thống quản lý thư viện",
//   },
// ];
// const completedTask = [
//   {
//     id: 6,
//     taskName: "Ôn tập lý thuyết tích phân",
//     priority: "low",
//     status: "completed",
//     deadline: "2026-05-06T14:00:00",

//     subject: {
//       id: 3,
//       name: "Toán cao cấp",
//       color: "#ef4444",
//     },

//     description: "Xem lại các công thức nguyên hàm cơ bản",
//   },
//   {
//     id: 7,
//     taskName: "Cài đặt MySQL",
//     priority: "low",
//     status: "completed",
//     deadline: "2026-05-05T09:00:00",

//     subject: {
//       id: 5,
//       name: "Cơ sở dữ liệu",
//       color: "#8b5cf6",
//     },

//     description: "Setup database cho project quản lý thư viện",
//   },
// ];
function Tasks() {
  const [tasksList, setTaskList] = useState(tasks);
  const [filterPriority, setFilterPriority] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const filteredTasks = tasksList.filter((task) => {
    if (filterPriority === "all") {
      return true;
    }

    return task.priority === filterPriority;
  });
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortOrder == "asc") {
      return new Date(a.deadline) - new Date(b.deadline);
    } else {
      return new Date(b.deadline) - new Date(a.deadline);
    }
  });
  const currentTasks = sortedTasks.filter(
    (task) => task.status === "in-progress",
  );

  const upcomingTask = sortedTasks.filter((task) => task.status === "todo");

  const completedTask = sortedTasks.filter(
    (task) => task.status === "completed",
  );
  const exportPDF = () => {
    const doc = new jsPDF();

    autoTable(doc, {
      head: [["Tên task", "Môn", "Priority"]],
      body: tasks.map((task) => [
        task.taskName,
        task.subject.name,
        task.priority,
      ]),
    });

    doc.save("tasks-report.pdf");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>Tất cả các nhiệm vụ</h2>
          <p className={styles.subtitle}>
            Quản lý và theo dõi tiến độ học tập của bạn
          </p>
        </div>
        <div className={styles.actions}>
          <Button variant="ghost" leftIcon={faPrint} onClick={exportPDF}>
            Xuất báo cáo
          </Button>
          <Button icon={faPlus} variant="primary" to={"/tasks/add"}>
            Thêm nhiệm vụ
          </Button>
        </div>
      </div>
      <div className={styles.filters}>
        <div className={styles.leftFilter}>
          <span>
            <FontAwesomeIcon icon={faSliders} />
            Bộ lọc:
          </span>
          <FilterDropdown
            label={"Môn học"}
            rightIcon={faAngleDown}
            options={PRIORITIES}
          />
          <FilterDropdown
            label={"Độ ưu tiên"}
            rightIcon={faAngleDown}
            options={PRIORITIES}
            onChange={setFilterPriority}
          />
        </div>
        <div className={styles.rightFilter}>
          <span>Sắp xếp theo:</span>
          <button
            onClick={() =>
              setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
            }
          >
            Hạn chót
            <FontAwesomeIcon
              icon={sortOrder === "asc" ? faArrowDown : faArrowUp}
            />
          </button>
        </div>
      </div>
      <div className={styles.container}>
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
    </div>
  );
}
export default Tasks;
