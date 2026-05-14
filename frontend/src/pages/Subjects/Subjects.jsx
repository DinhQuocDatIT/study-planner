import styles from "./Subjects.module.css";
import Button from "../../components/ui/Button/Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSliders } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons/faClock";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
const subjects = [
  {
    id: 1,
    name: "Cognitive Psychology",
    daysOfWeek: ["3", "5"],
    time: "13:30",
    period: "chiều",
    color: "#a855f7",
    progress: 62,
  },
  {
    id: 2,
    name: "Modern Architecture",
    daysOfWeek: ["6"],
    time: "14:00",
    period: "chiều",
    color: "#f97316",
    progress: 92,
  },
  {
    id: 3,
    name: "World History",
    daysOfWeek: ["3", "5"],
    time: "09:30",
    period: "sáng",
    color: "#ef4444",
    progress: 25,
  },
  {
    id: 4,
    name: "Data Structures",
    daysOfWeek: ["2", "5"],
    time: "08:00",
    period: "sáng",
    color: "#22c55e",
    progress: 70,
  },
  {
    id: 5,
    name: "Machine Learning",
    daysOfWeek: ["4"],
    time: "15:00",
    period: "chiều",
    color: "#3b82f6",
    progress: 55,
  },
  {
    id: 6,
    name: "Linear Algebra",
    daysOfWeek: ["2", "6"],
    time: "11:00",
    period: "sáng",
    color: "#eab308",
    progress: 40,
  },
  {
    id: 7,
    name: "Philosophy",
    daysOfWeek: ["3"],
    time: "16:00",
    period: "chiều",
    color: "#ec4899",
    progress: 78,
  },
  {
    id: 8,
    name: "Software Engineering",
    daysOfWeek: ["2", "4"],
    time: "10:00",
    period: "sáng",
    color: "#14b8a6",
    progress: 81,
  },
  {
    id: 9,
    name: "Artificial Intelligence",
    daysOfWeek: ["5"],
    time: "17:00",
    period: "chiều",
    color: "#6366f1",
    progress: 67,
  },
  {
    id: 10,
    name: "Physics",
    daysOfWeek: ["2", "6"],
    time: "07:30",
    period: "sáng",
    color: "#84cc16",
    progress: 45,
  },
  {
    id: 11,
    name: "Chemistry",
    daysOfWeek: ["4"],
    time: "13:00",
    period: "chiều",
    color: "#f43f5e",
    progress: 58,
  },
  {
    id: 12,
    name: "Biology",
    daysOfWeek: ["3"],
    time: "15:30",
    period: "chiều",
    color: "#10b981",
    progress: 73,
  },
  {
    id: 13,
    name: "Statistics",
    daysOfWeek: ["2", "5"],
    time: "09:00",
    period: "sáng",
    color: "#8b5cf6",
    progress: 61,
  },
  {
    id: 14,
    name: "Economics",
    daysOfWeek: ["6"],
    time: "14:30",
    period: "chiều",
    color: "#f59e0b",
    progress: 88,
  },
  {
    id: 15,
    name: "Graphic Design",
    daysOfWeek: ["3", "5"],
    time: "10:30",
    period: "sáng",
    color: "#06b6d4",
    progress: 52,
  },
  {
    id: 16,
    name: "Web Development",
    daysOfWeek: ["2", "4"],
    time: "18:00",
    period: "chiều",
    color: "#0ea5e9",
    progress: 95,
  },
  {
    id: 17,
    name: "Database Systems",
    daysOfWeek: ["5"],
    time: "08:30",
    period: "sáng",
    color: "#64748b",
    progress: 36,
  },
  {
    id: 18,
    name: "Cyber Security",
    daysOfWeek: ["4", "6"],
    time: "16:30",
    period: "chiều",
    color: "#dc2626",
    progress: 64,
  },
  {
    id: 19,
    name: "Mobile Development",
    daysOfWeek: ["2"],
    time: "19:00",
    period: "tối",
    color: "#7c3aed",
    progress: 80,
  },
  {
    id: 20,
    name: "Cloud Computing",
    daysOfWeek: ["3", "5"],
    time: "12:00",
    period: "trưa",
    color: "#2563eb",
    progress: 49,
  },
];
function Subjects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = subjects.slice(startIndex, endIndex);
  const totalPages = Math.ceil(subjects.length / itemsPerPage);
  const [isAdd, setIsAdd] = useState(false);
  const AddSubject = () => {
    return (
      <NavLink
        className={`${styles.cardsubject} ${styles.addsubject}`}
        to={"/subjects/add"}
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Thêm môn học</span>
      </NavLink>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>Môn học học thuật</h2>
          <p className={styles.subtitle}>
            Quản lý chương trình giảng dạy và theo dõi tiến độ của bạn qua các
            lĩnh vực trọng tâm trong học kỳ hiện tại.
          </p>
        </div>
        <div className={styles.actions}>
          <Button icon={faSliders} variant="outline">
            Lọc
          </Button>
          <Button icon={faPlus} variant="primary" to={"/subjects/add"}>
            Thêm môn học
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.subjectslist}>
          {currentItems.map((item) => {
            return (
              <div className={styles.cardsubject} key={item.id}>
                <div className={styles.namesubject}>
                  <span
                    className={styles.dot}
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span className={styles.tilte}>{item.name}</span>
                </div>
                <div className={styles.days}>
                  <FontAwesomeIcon icon={faClock} />
                  <span>Thứ {item.daysOfWeek.join(", ")}</span>
                </div>
                <span
                  className={styles.progress}
                  style={{
                    backgroundColor: `${item.color}20`,
                    color: item.color,
                  }}
                >
                  Hoàn thành {item.progress}%
                </span>
              </div>
            );
          })}
          <AddSubject />
        </div>
        <div className={styles.subjectsFilter}>
          {Array.from({ length: totalPages }, (_, i) => {
            return (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                style={{
                  backgroundColor: `${currentPage === i + 1 ? "#000000" : "#f9fafb"}`,
                  color: `${currentPage === i + 1 ? "white" : "black"}`,
                }}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Subjects;
