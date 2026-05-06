import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./AddSubject.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendar,
  faCheck,
  faDeleteLeft,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Button from "../../../components/ui/Button/Button";
import AddSchedule from "../AddSchedule/AddSchedule";
function AddSubject() {
  const colors = [
    "#f87171",
    "#10b981",
    "#f59e0b",
    "#8b5cf6",
    "#ec4899",
    "#06b6d4",
    "#64748b",
    "#a855f7",
    "#22c55e",
  ];
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [arrSchedule, setArrSchedule] = useState([]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [schedules, setSchedules] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(note);
    console.log(selectedColor);
  };

  const hanldeAddSchedule = () => {
    const newSchedule = {
      id: Date.now(),
      dayOfWeek: "monday",
      startTime: "",
      endTime: "",
    };
    setArrSchedule((prev) => [...prev, newSchedule]);
  };
  const updateSchedule = (id, field, value) => {
    setArrSchedule((prev) =>
      prev.map((item) => (item.id == id ? { ...item, [field]: value } : item)),
    );
  };
  const removeSchedule = (id) => {
    setArrSchedule((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <NavLink to={"/subjects"}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Quay lại
        </NavLink>
        <h2>Thêm môn học mới</h2>
        <p>Thiết lập thông tin cơ bản cho môn học của bạn.</p>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <div className={styles.subject}>
            <div className={styles.infor}>
              <label htmlFor="namesubject">Tên môn học</label>
              <input
                type="text"
                placeholder="Ví dụ: giải tích 1, kinh tế vĩ mô"
                id="namesubject"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
                onInvalid={(e) =>
                  e.target.setCustomValidity("Vui lòng chọn thời gian bắt đầu")
                }
                onInput={(e) => e.target.setCustomValidity("")}
              />
              <label htmlFor="note">Ghi chú và mục tiêu</label>
              <textarea
                id="note"
                placeholder="Nhập mục tiêu học tập hoặc các ghi chú quan trọng cho môn học này..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
            <div className={styles.colors}>
              <span>Màu sắc nhận diện</span>
              <div className={styles.containercolor}>
                {colors.map((color, index) => {
                  return (
                    <div
                      style={{ backgroundColor: color, color: color }}
                      key={index}
                      className={`${styles.colorItem} ${color == selectedColor ? styles.active : ""} `}
                      onClick={() => {
                        setSelectedColor(color);
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.schedules}>
            <div className={styles.headerschedule}>
              <div className={styles.titleschedule}>
                <FontAwesomeIcon icon={faCalendar} />
                <span>Lịch học định kỳ</span>
              </div>
              <button type="button" onClick={hanldeAddSchedule}>
                <FontAwesomeIcon icon={faPlus} /> Thêm buổi học
              </button>
            </div>
            <div className={styles.schedulelist}>
              {arrSchedule.map((item, index) => {
                return (
                  <AddSchedule
                    key={index}
                    data={item}
                    onUpdate={updateSchedule}
                    onRemove={removeSchedule}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.actionSubject}>
            <Button type="button" variant="outline">
              Hủy bỏ
            </Button>
            <Button type="submit" icon={faCheck}>
              Lưu môn học
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddSubject;
