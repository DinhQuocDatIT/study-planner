import styles from "./SessionItem.module.css";
import { SESSION_STATUS } from "../../../constants/sessions";
import DateFormatter from "../../../utils/DateFormatter";

function SessionItem({ session }) {
  const status = SESSION_STATUS.find(
    (s) => s.val === session.status,
  );

  return (
    <div className={styles.session}>
      <span className={styles.subjectName}>
        <div
          className={styles.dot}
          style={{
            backgroundColor: session.subject.color,
          }}
        />
        {session.subject.name}
      </span>

      <span className={styles.startTime}>
        {DateFormatter.formatDate(session.startTime)}
      </span>

      <span className={styles.duration}>
        {session.duration / 60} phút
      </span>

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
}

export default SessionItem;