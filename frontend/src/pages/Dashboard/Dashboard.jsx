import styles from "./Dashboard.module.css";
import {
  faCircleCheck,
  faClipboard,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
function Dashboard() {
  const stats = [
    {
      title: "Tổng số nhiệm vụ",
      count: 42,
      icon: faClipboardList,
      subtitle: "+12% so với tuần trước",
    },
    {
      title: "Nhiệm vụ đã hoàn thành",
      count: 31,
      icon: faCircleCheck,
      subtitle: "Đúng tiến độ",
    },
    {
      title: "Hạn chót sắp tới",
      count: 3,
      icon: faClipboard,
      subtitle: "Khẩn cấp",
    },
  ];
  const tasks = [
    {
      id: 1,
      title: "Giải tích III: Bài tập số 4",
      name: "Toán học",
      created_at: "Còn 3 ngày",
    },
    {
      id: 2,
      title: "Báo cáo nghiên cứu: Kinh tế vĩ mô nâng cao",
      name: "Kinh tế học",
      created_at: "Hạn chót: Ngày mai, 17:00",
    },
    {
      id: 3,
      title: "Lý thuyết ngôn ngữ: Tóm tắt Chương 2",
      name: "Ngôn ngữ học",
      created_at: "Còn 5 ngày",
    },
  ];
  const progress = [
    {
      id: "1",
      name: "Kinh tế",
      progress: 80,
      totalTasks: 10,
      completedTasks: 8,
      color: "#00c382",
    },
    {
      id: "2",
      name: "Lập trình Web",
      progress: 60,
      totalTasks: 15,
      completedTasks: 9,
      color: "#1c4e9f",
    },
    {
      id: "3",
      name: "Toán cao cấp",
      progress: 30,
      totalTasks: 10,
      completedTasks: 3,
      color: "#b87500",
    },
  ];
  const currentTask = {
    name: "Kinh tế",
    timeLeft: 25,
  };
  const nextTask = {
    title: "Làm bài React",
    deadline: "15:00",
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Chào mừng trở lại, Alex.</h2>
        <p>
          Bạn đã hoàn thành 72% mục tiêu tuần này. Hãy tiếp tục cố gắng nhé!
        </p>
      </div>
      <div className={styles.statsgrid}>
        {stats.map((item, index) => (
          <div className={styles.cardstat} key={index}>
            <div className={styles.cardstatheader}>
              <FontAwesomeIcon icon={item.icon} />
              <span
                className={`${styles.cardstatsubtitle} ${item.subtitle === "Khẩn cấp" ? styles.urgent : ""} `}
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
      <div className={styles.maingird}>
        <div className={styles.dashboardleft}>
          <div className={styles.tasklist}>
            <div className={styles.tasklistheader}>
              <h3>Nhiệm vụ đang thực hiện</h3>
              <NavLink to="/tasks">Xem tất cả</NavLink>
            </div>
            <div className={styles.tasklistbody}>
              {tasks.map((item) => {
                return (
                  <div className={styles.task} key={item.id}>
                    <input type="checkbox" />
                    <div className={styles.contenttask}>
                      <p className={styles.title}>{item.title}</p>
                      <div className={styles.infotask}>
                        <span className={styles.namesubject}>{item.name}</span>
                        <div className={styles.deadline}>
                          <FontAwesomeIcon icon={faClock} />
                          <span className={styles.time}>{item.created_at}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.dashboardright}>
          <div className={styles.progresssection}>
            <h3>Tiến độ hàng tuần</h3>
            <div className={styles.progressbody}>
              {progress.map((item) => {
                return (
                  <div className={styles.progress} key={item.id}>
                    <div className={styles.infoprogress}>
                      <span className={styles.titleprogress}>{item.name}</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{
                          width: `${item.progress}%`,
                          backgroundColor: item.color,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.roadmapsection}>
            <h3>Lộ trình học tập</h3>
            <div className={styles.roadmapbody}>
              <div className={styles.item}>
                <div className={styles.dotActive}></div>

                <div className={styles.currenttask}>
                  <span className={styles.current}>Hiện tại</span>
                  {currentTask ? (
                    <div>
                      <p className={styles.titletask}>{currentTask.name}</p>
                      <span className={styles.timeLeft}>
                        {currentTask.timeLeft}
                      </span>
                    </div>
                  ) : (
                    <p>Chưa có nhiệm vụ nào cần làm</p>
                  )}
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.dot}></div>

                <div className={styles.nexttask}>
                  <span className={styles.next}>Tiếp theo</span>
                  {nextTask ? (
                    <div>
                      <p className={styles.titletask}>{nextTask.title}</p>
                      <span className={styles.deadline}>
                        {nextTask.deadline}
                      </span>
                    </div>
                  ) : (
                    <p className={styles.empty}>
                      Không có nhiệm vụ trong 4 giờ tới
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
