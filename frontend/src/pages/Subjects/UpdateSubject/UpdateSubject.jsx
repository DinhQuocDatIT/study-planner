import { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import styles from "./UpdateSubject.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendar,
  faCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Button from "../../../components/ui/Button/Button";
import AddSchedule from "../AddSchedule/AddSchedule";

// Mảng dữ liệu mẫu (Sau này bạn sẽ thay bằng gọi API fetch từ database)
const mockSubjects = [
  {
    id: 1,
    name: "Cognitive Psychology",
    daysOfWeek: ["3", "5"],
    time: "13:30",
    color: "#a855f7",
    progress: 62,
  },
  {
    id: 2,
    name: "Modern Architecture",
    daysOfWeek: ["6"],
    time: "14:00",
    color: "#f97316",
    progress: 92,
  },
  {
    id: 3,
    name: "World History",
    daysOfWeek: ["3", "5"],
    time: "09:30",
    color: "#ef4444",
    progress: 25,
  },
  {
    id: 4,
    name: "Data Structures",
    daysOfWeek: ["2", "5"],
    time: "08:00",
    color: "#22c55e",
    progress: 70,
  },
  {
    id: 5,
    name: "Machine Learning",
    daysOfWeek: ["4"],
    time: "15:00",
    color: "#3b82f6",
    progress: 55,
  },
  {
    id: 13,
    name: "Statistics",
    daysOfWeek: ["2", "5"],
    time: "09:00",
    color: "#8b5cf6",
    progress: 61,
  },
];

const dayMapToValue = {
  2: "monday",
  3: "tuesday",
  4: "wednesday",
  5: "thursday",
  6: "friday",
  7: "saturday",
  CN: "sunday",
};
const valueMapToDay = {
  monday: "2",
  tuesday: "3",
  wednesday: "4",
  thursday: "5",
  friday: "6",
  saturday: "7",
  sunday: "CN",
};

function UpdateSubject() {
  const { id } = useParams();
  const navigate = useNavigate();

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
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [arrSchedule, setArrSchedule] = useState([]);

  // Đổ dữ liệu cũ vào form
  useEffect(() => {
    const currentSubject = mockSubjects.find((sub) => sub.id === parseInt(id));

    if (currentSubject) {
      setName(currentSubject.name);
      setSelectedColor(currentSubject.color);
      setNote(currentSubject.note || "");

      if (currentSubject.daysOfWeek) {
        const mappedSchedules = currentSubject.daysOfWeek.map((day, idx) => ({
          id: Date.now() + idx,
          dayOfWeek: dayMapToValue[day] || "monday",
          startTime: currentSubject.time || "",
          endTime: "",
        }));
        setArrSchedule(mappedSchedules);
      }
    }
  }, [id]);

  // Xử lý Cập nhật môn học
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      name,
      note,
      color: selectedColor,
      daysOfWeek: arrSchedule.map((item) => valueMapToDay[item.dayOfWeek]),
      schedules: arrSchedule,
    };

    console.log(`[API UPDATE] Cập nhật môn học ID ${id}:`, updatedData);
    // Thực tế: await axios.put(`/api/subjects/${id}`, updatedData);
    navigate("/subjects");
  };

  // Xử lý Xóa môn học (Chuẩn UX)
  const handleDelete = () => {
    const isConfirm = window.confirm(
      `Bạn có chắc chắn muốn xóa môn học "${name}" không? Hành động này không thể hoàn tác!`,
    );

    if (isConfirm) {
      console.log(`[API DELETE] Tiến hành xóa môn học ID ${id}`);
      // Thực tế: await axios.delete(`/api/subjects/${id}`);
      navigate("/subjects"); // Xóa xong quay về danh sách
    }
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
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const removeSchedule = (id) => {
    setArrSchedule((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <NavLink to={"/subjects"}>
          <FontAwesomeIcon icon={faArrowLeft} /> Quay lại
        </NavLink>
        <h2>Cập nhật môn học</h2>
        <p>Chỉnh sửa thông tin và lịch học định kỳ của môn học này.</p>
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
                      className={`${styles.colorItem} ${
                        color === selectedColor ? styles.active : ""
                      } `}
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
              {arrSchedule.map((item) => {
                return (
                  <AddSchedule
                    key={item.id}
                    data={item}
                    onUpdate={updateSchedule}
                    onRemove={removeSchedule}
                  />
                );
              })}
            </div>
          </div>

          {/* Cấu trúc nút hành động chuẩn phân tách trái - phải */}
          <div className={styles.actionSubject}>
            <div className={styles.deleteBtn}>
              <Button
                type="button"
                variant="danger"
                icon={faTrashCan}
                onClick={handleDelete}
              >
                Xóa môn học
              </Button>
            </div>
            <div className={styles.rightActions}>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/subjects")}
              >
                Hủy bỏ
              </Button>
              <Button type="submit" icon={faCheck}>
                Cập nhật
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateSubject;
