import styles from "./StudySession.module.css";
import { useLocation, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCaretRight,
  faPause,
  faPlay,
  faVolume,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";

const formatTime = (timer) => {
  const remaining = timer;
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0",
  )}`;
};
function StudySession() {
  const location = useLocation();
  const {
    subject,
    duration,
    soundEnabled,
    elapsed,
    startTime,

    status,
  } = location.state || {};
  const [timer, setTimer] = useState(elapsed);

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);
  const time = formatTime(timer);
  const progress = (timer / duration) * 100;

  useEffect(() => {
    if (timer >= duration) {
      clearInterval(countRef.current);

      setIsActive(false);

      countRef.current = null;
      toast.success("Chúc mừng bạn hoàn thành phiên học");

      // update database
    }
  }, [timer, duration]);

  const handleStart = () => {
    if (countRef.current) return;
    setIsActive(true);
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const handlePause = () => {
    clearInterval(countRef.current);
    countRef.current = null;
    setIsPaused(true);
    setIsActive(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.header}>
          <NavLink to={"/study_sessions/add"}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Quay lại
          </NavLink>
        </div>
      </div>
      <div className={styles.content}>
        <div
          className={styles.clock}
          style={{
            background: `conic-gradient(
      ${subject.color} ${progress}%,
      #f2f2f2 ${progress}%
    )`,
          }}
        >
          <div className={styles.innerClock}>
            <span className={styles.time}>{time}</span>

            <span className={styles.subjectName}>{subject.name}</span>
          </div>
        </div>
        <div className={styles.actions}>
          <button
            onClick={isActive ? handlePause : handleStart}
            disabled={timer >= duration ? true : false}
          >
            <FontAwesomeIcon icon={isActive ? faPause : faPlay} />
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Thời gian tích lũy hôm nay </p>
        <span>120 phút</span>
      </div>
    </div>
  );
}
export default StudySession;
