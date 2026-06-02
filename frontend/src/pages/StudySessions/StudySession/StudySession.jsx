import styles from "./StudySession.module.css";
import { useLocation, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPause,
  faPlay,
  faVolume,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";

const formatTime = (timer) => {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0",
  )}`;
};

function StudySession() {
  const location = useLocation();

  if (!location.state) {
    return (
      <div className={styles.wrapper}>
        <p>Không tìm thấy dữ liệu phiên học.</p>
      </div>
    );
  }

  const { subject, duration, elapsed } = location.state;

  const [timer, setTimer] = useState(elapsed || 0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const countRef = useRef(null);
  const audioRef = useRef(new Audio("/sounds/bell.mp3"));

  const time = formatTime(timer);
  const progress = Math.min((timer / duration) * 100, 100);
  const [soundEnabled, setSoundEnabled] = useState(true);
  useEffect(() => {
    if (timer >= duration && countRef.current) {
      clearInterval(countRef.current);
      countRef.current = null;

      setIsActive(false);
      setIsPaused(false);

      if (soundEnabled) {
        audioRef.current.currentTime = 0;

        audioRef.current
          .play()
          .catch((err) => console.log("Không thể phát âm thanh:", err));
      }

      toast.success("🎉 Chúc mừng bạn hoàn thành phiên học!");
    }
  }, [timer, duration, soundEnabled]);

  useEffect(() => {
    return () => {
      clearInterval(countRef.current);
    };
  }, []);

  const handleStart = () => {
    if (countRef.current) return;

    setIsActive(true);
    setIsPaused(false);

    countRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
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
        <NavLink to="/study_sessions/add">
          <FontAwesomeIcon icon={faArrowLeft} />
          Quay lại
        </NavLink>
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
            disabled={timer >= duration}
          >
            <FontAwesomeIcon icon={isActive ? faPause : faPlay} />
          </button>

          <button
            type="button"
            className={`${styles.soundBtn} ${soundEnabled ? styles.active : ""}`}
            onClick={() => setSoundEnabled((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faVolume} />
          </button>
        </div>
      </div>

      <div className={styles.footer}>
        <p>Tiến độ hoàn thành</p>
        <span>{Math.round(progress)}%</span>
      </div>
    </div>
  );
}

export default StudySession;
