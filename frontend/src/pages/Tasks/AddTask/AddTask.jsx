import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faAlignLeft,
  faArrowLeft,
  faBook,
  faBusinessTime,
  faCheck,
  faCircle,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./AddTask.module.css";
import { PRIORITIES } from "../../../constants/priorities";
import Button from "../../../components/ui/Button/Button";
import { useState } from "react";
import { TASKSTATUS } from "../../../constants/taskStatus";
import { useTaskForm } from "../../../hooks/useTaskForm";
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
function AddTask() {
  const { formData, handleChange, resetForm } = useTaskForm(subjects);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <NavLink to={"/tasks"}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Quay lại
        </NavLink>
        <h2>Thêm nhiệm vụ mới</h2>
        <p>Lên kế hoạch và tổ chức các bài học của bạn một cách khoa học.</p>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.titleInput}
            value={formData.taskName}
            onChange={(e) => handleChange("taskName", e.target.value)}
            placeholder="Tiêu đề nhiệm vụ..."
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Vui lòng nhập tiêu đề nhiệm vụ")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>
                <FontAwesomeIcon icon={faBook} />
                Môn học
              </label>
              <select
                required
                value={formData.idSubject}
                onChange={(e) => handleChange("idSubject", e.target.value)}
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
            <div className={styles.formGroup}>
              <label>
                <FontAwesomeIcon icon={faBusinessTime} />
                Hạn chót
              </label>
              <input
                type="datetime-local"
                value={formData.deadline}
                onChange={(e) => handleChange("deadline", e.target.value)}
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity("Vui lòng chọn thời gian ")
                }
                onInput={(e) => e.target.setCustomValidity("")}
              />
            </div>
            <div className={styles.formGroup}>
              <label>
                <FontAwesomeIcon icon={faFlag} />
                Độ ưu tiên
              </label>
              <div className={styles.priority}>
                {PRIORITIES.filter((item) => item.val !== "all").map((item) => {
                  var colorbtn = "black";
                  var bgbtn = "#eeeeee";
                  if (formData.priority === item.val) {
                    colorbtn = item.color;
                    bgbtn = `${item.color}20`;
                  }
                  return (
                    <button
                      key={item.val}
                      style={{
                        color: colorbtn,
                        backgroundColor: bgbtn,
                      }}
                      type="button"
                      onClick={() => handleChange("priority", item.val)}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>
                <FontAwesomeIcon icon={faCircle} />
                Trạng thái
              </label>
              <select
                required
                value={formData.status}
                onChange={(e) => handleChange("status", e.target.value)}
              >
                {TASKSTATUS.map((item) => {
                  return (
                    <option key={item.val} value={item.val}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={styles.description}>
            <span>
              <FontAwesomeIcon icon={faAlignLeft} />
              Mô tả chi tiết
            </span>
            <textarea
              placeholder="Nhập nội dung nhiệm vụ tại đây..."
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("Vui lòng nhập mô tả nhiệm vụ")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            ></textarea>
          </div>
          <div className={styles.actionTask}>
            <Button type="button" variant="outline">
              Hủy bỏ
            </Button>
            <Button type="submit" icon={faCheck}>
              Lưu nhiệm vụ
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddTask;
