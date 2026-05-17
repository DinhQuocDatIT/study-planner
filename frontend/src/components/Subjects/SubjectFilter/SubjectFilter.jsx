import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SubjectFilter.module.css";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "../../ui/Button/Button";

const days = [
  {
    val: 0,
    label: "Chủ nhật",
  },
  {
    val: 1,
    label: "Thứ 2",
  },
  {
    val: 2,
    label: "Thứ 3",
  },

  {
    val: 3,
    label: "Thứ 4",
  },
  {
    val: 4,
    label: "Thứ 5",
  },
  {
    val: 5,
    label: "Thứ 6",
  },
  {
    val: 6,
    label: "Thứ 7",
  },
];
function SubjectFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const handleDayChange = (value) => {
    setSelectedDays((prev) =>
      prev.includes(value) ? prev.filter((d) => d !== value) : [...prev, value],
    );
  };
  const handleReset = () => {
    setSearch("");
    setSelectedDays([]);
  };
  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.showbtn}
      >
        <FontAwesomeIcon icon={faFilter} /> Lọc
      </button>
      {isOpen && (
        <div className={styles.filter}>
          <div className={styles.content}>
            <div className={styles.group}>
              <label>Tên môn học</label>
              <div className={styles.search}>
                <FontAwesomeIcon icon={faSearch} />
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.group}>
              <label>Ngày trong tuần</label>

              <div className={styles.days}>
                {days.map((item) => (
                  <label key={item.val} className={styles.day}>
                    <input
                      type="checkbox"
                      checked={selectedDays.includes(item.val)}
                      onChange={() => handleDayChange(item.val)}
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <Button variant="outline" type="button" onClick={handleReset}>
              Đặt lại
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
export default SubjectFilter;
