import { NavLink } from "react-router-dom";
import styles from "./AddSession.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCaretRight,
  faVolume,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/ui/Button/Button";
import { useState } from "react";
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
const durations = [
  {
    key: "focus",
    label: "Tập trung",
    duration: 25,
  },
  {
    key: "deep",
    label: "Chuyên sâu",
    duration: 45,
  },
  {
    key: "master",
    label: "Cao độ",
    duration: 60,
  },
  {
    key: "zen",
    label: "Tĩnh tâm",
    duration: 90,
  },
];
function AddSession() {
  const [idSubject, setIdSubject] = useState(subjects?.[0].id);
  const [duration, setDuration] = useState(durations?.[0].key);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(idSubject);
    console.log(duration);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <NavLink to={"/study_sessions"}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Quay lại
        </NavLink>
        <h2>Bắt đầu phiên học mới</h2>
        <p>Thiết lập thời gian và tập trung hoàn thành mục tiêu của bạn.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.groupInput}>
          <label>Chọn môn học</label>
          <select
            required
            value={idSubject}
            onChange={(e) => setIdSubject(e.target.value)}
          >
            {subjects.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.groupInput}>
          <label>Thời lượng(phút)</label>
          <div className={styles.durations}>
            {durations.map((item) => {
              return (
                <button
                  className={`${styles.duration} ${item.key == duration ? styles.active : ""}`}
                  key={item.key}
                  onClick={() => setDuration(item.key)}
                >
                  <span className={styles.durationValue}>{item.duration}</span>
                  <span className={styles.durationLabel}>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <div className={styles.settingItem}>
            <label className={styles.settingLabel}>
              <FontAwesomeIcon icon={faVolume} />
              Âm thanh thông báo
            </label>
            <label className={styles.switch}>
              <input
                checked={soundEnabled}
                onChange={(e) => setSoundEnabled(e.target.checked)}
                type="checkbox"
              />

              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
        <Button type="submit" leftIcon={faCaretRight}>
          Bắt đâu phiên học
        </Button>
      </form>
    </div>
  );
}
export default AddSession;
