import {
  faPlus,
  faClipboardList,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleCheck,
  faClipboard,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./StudySessionManager.module.css";
import Button from "../../components/ui/Button/Button";
import FilterDropdown from "../../components/ui/FilterDropdown/FilterDropdown";
import { SESSION_STATUS } from "../../constants/sessions";
import DateFormatter from "../../utils/DateFormatter";
const stats = [
  {
    title: "Tổng hợp thời gian tập trung",
    count: 42,
    icon: faClipboardList,
    subtitle: "+12% so với tuần trước",
    color: "#f97316",
  },
  {
    title: "Số phiên hoàn thành",
    count: 31,
    icon: faCircleCheck,
    subtitle: "Đúng tiến độ",
    color: "#00e06c",
  },
  {
    title: "Độ tập trung bình",
    count: "3%",
    icon: faClipboard,
    subtitle: "High Intensity",
    color: "#dbe200",
  },
];
const sessions = [
  {
    id: 1,
    subject: {
      id: 5,
      name: "Cơ sở dữ liệu",
      color: "#8b5cf6",
    },
    startTime: "2026-05-05T09:00:00",
    duration: 25 * 60,
    elapsed: 25 * 60,
    status: "completed",
  },

  {
    id: 2,
    subject: {
      id: 3,
      name: "Toán cao cấp",
      color: "#ef4444",
    },
    startTime: "2026-05-05T10:00:00",
    duration: 30 * 60,
    elapsed: 30 * 60,
    status: "completed",
  },

  {
    id: 3,
    subject: {
      id: 2,
      name: "UI/UX Design",
      color: "#3b82f6",
    },
    startTime: "2026-05-06T14:15:00",
    duration: 25 * 60,
    elapsed: 10 * 60,
    status: "paused",
  },

  {
    id: 4,
    subject: {
      id: 1,
      name: "Lập trình Java",
      color: "#f97316",
    },
    startTime: "2026-05-06T20:00:00",
    duration: 20 * 60,
    elapsed: 0,
    status: "cancelled",
  },

  {
    id: 5,
    subject: {
      id: 4,
      name: "Tiếng Anh chuyên ngành",
      color: "#06b6d4",
    },
    startTime: "2026-05-07T08:30:00",
    duration: 30 * 60,
    elapsed: 30 * 60,
    status: "completed",
  },

  {
    id: 6,
    subject: {
      id: 5,
      name: "Cơ sở dữ liệu",
      color: "#8b5cf6",
    },
    startTime: "2026-05-07T19:00:00",
    duration: 45 * 60,
    elapsed: 12 * 60,
    status: "running",
  },

  {
    id: 7,
    subject: {
      id: 2,
      name: "UI/UX Design",
      color: "#3b82f6",
    },
    startTime: "2026-05-08T07:30:00",
    duration: 30 * 60,
    elapsed: 30 * 60,
    status: "completed",
  },

  {
    id: 8,
    subject: {
      id: 3,
      name: "Toán cao cấp",
      color: "#ef4444",
    },
    startTime: "2026-05-08T13:00:00",
    duration: 10 * 60,
    elapsed: 5 * 60,
    status: "paused",
  },

  {
    id: 9,
    subject: {
      id: 1,
      name: "Lập trình Java",
      color: "#f97316",
    },
    startTime: "2026-05-09T15:00:00",
    duration: 25 * 60,
    elapsed: 8 * 60,
    status: "running",
  },

  {
    id: 10,
    subject: {
      id: 4,
      name: "Tiếng Anh chuyên ngành",
      color: "#06b6d4",
    },
    startTime: "2026-05-09T21:00:00",
    duration: 5 * 60,
    elapsed: 0,
    status: "cancelled",
  },
];
function StudySessionManager() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>Quản lý phiên học</h2>
          <p className={styles.subtitle}>
            Xem lại lịch sử và hiệu suất tập trung của bạn.
          </p>
        </div>
        <div className={styles.actions}>
          <Button icon={faPlus} variant="primary" to={"/study_sessions/add"}>
            Phiên học mới
          </Button>
        </div>
      </div>
      <div className={styles.statsGird}>
        {stats.map((item, index) => (
          <div className={styles.cardstat} key={index}>
            <div className={styles.cardstatheader}>
              <FontAwesomeIcon icon={item.icon} style={{ color: item.color }} />
              <span
                className={`${styles.cardstatsubtitle}  `}
                style={{ color: item.color }}
              >
                {item.subtitle}
              </span>
            </div>
            <div className={styles.cardstatbody}>
              <span>{item.title}</span>
              <span className={styles.cardstatvalue}>
                {item.count > 9 ? item.count : "0" + item.count}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.sessionList}>
        <div className={styles.sessionListHeader}>
          <span>Lịch sử phiên học </span>
          <div className={styles.filters}>
            <FilterDropdown
              label={"Lọc"}
              rightIcon={faAngleDoubleDown}
              options={[]}
            />
          </div>
        </div>
        <div className={styles.sessionListContent}>
          {sessions.map((item) => {
            const status = SESSION_STATUS.find((s) => s.val == item.status);
            return (
              <div key={item.id} className={styles.session}>
                <span className={styles.subjectName}>
                  <div
                    className={styles.dot}
                    style={{ backgroundColor: item.subject.color }}
                  ></div>
                  {item.subject.name}
                </span>
                <span className={styles.startTime}>
                  {DateFormatter.formatDate(item.startTime)}
                </span>
                <span className={styles.duration}>{item.duration / 60}</span>
                <span
                  className={styles.status}
                  style={{
                    color: status.color,
                    backgroundColor: `${status.color}20`,
                  }}
                >
                  {status.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default StudySessionManager;
