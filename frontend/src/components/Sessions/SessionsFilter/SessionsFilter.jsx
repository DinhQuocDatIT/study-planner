import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SessionsFilter.module.css";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "../../ui/Button/Button";
import { SESSION_STATUS } from "../../../constants/sessions";

function SessionsFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    status: "all",
  });

  const toggleFilter = () => setIsOpen((prev) => !prev);

  const handleChange = (key) => (e) => {
    setFilters((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleReset = () => {
    setFilters({ search: "", status: "all" });
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={toggleFilter} className={styles.showbtn}>
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
                  value={filters.search}
                  onChange={handleChange("search")}
                />
              </div>
            </div>

            <div className={styles.group}>
              <label>Trạng thái</label>
              <select value={filters.status} onChange={handleChange("status")}>
                <option value="all">Tất cả</option>
                {SESSION_STATUS.map((item) => (
                  <option key={item.val} value={item.val}>
                    {item.label}
                  </option>
                ))}
              </select>
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
export default SessionsFilter;
