import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
function MainLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.sidebar}  ${isOpen ? styles.open : styles.closed}`}
      >
        <Sidebar />
      </div>
      <div className={`${styles.maincontent} ${isOpen ? "" : styles.full}`}>
        <div className={`${styles.header} ${!isOpen ? styles.headerFull : ""}`}>
          <Header isOpenSidebar={isOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default MainLayout;
