import styles from "./Subjects.module.css";
import Button from "../../components/ui/Button/Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSliders } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons/faClock";
import { Outlet } from "react-router-dom";
import { useState } from "react";
function Subjects() {
  const subjects = [
    {
      id: 2,
      name: "Cognitive Psychology",
      daysOfWeek: ["3", "5"],
      time: "13:30",
      period: "chiều",
      color: "#a855f7",
      progress: 62,
    },
    {
      id: 3,
      name: "Modern Architecture",
      daysOfWeek: ["6"],
      time: "14:00",
      period: "chiều",
      color: "#f97316",
      progress: 92,
    },
    {
      id: 4,
      name: "World History",
      daysOfWeek: ["3", "5"],
      time: "09:30",
      period: "sáng",
      color: "#ef4444",
      progress: 25,
    },
    {
      id: 5,
      name: "Data Structures",
      daysOfWeek: ["2", "5"],
      time: "08:00",
      period: "sáng",
      color: "#22c55e",
      progress: 70,
    },
    {
      id: 6,
      name: "Machine Learning",
      daysOfWeek: ["4"],
      time: "15:00",
      period: "chiều",
      color: "#3b82f6",
      progress: 55,
    },
    {
      id: 7,
      name: "Linear Algebra",
      daysOfWeek: ["2", "6"],
      time: "11:00",
      period: "sáng",
      color: "#eab308",
      progress: 40,
    },
    {
      id: 8,
      name: "Philosophy",
      daysOfWeek: ["3"],
      time: "16:00",
      period: "chiều",
      color: "#ec4899",
      progress: 78,
    },
  ];
  const [isAdd, setIsAdd] = useState(false);
  const AddSubject = () => {
    return (
      <div className={`${styles.cardsubject} ${styles.addsubject}`}>
        <FontAwesomeIcon icon={faPlus} />
        <span>Thêm môn học</span>
      </div>
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
          {subjects.map((item) => {
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
      </div>
    </div>
  );
}
export default Subjects;
