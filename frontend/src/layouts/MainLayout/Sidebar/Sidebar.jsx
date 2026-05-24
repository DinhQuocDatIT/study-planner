import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAccusoft } from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";
import NavItem from "../../../components/NavItem/NavItem";
import { IDNAVITEMS, navItems } from "../../../constants/navigation";
import { useState } from "react";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <FontAwesomeIcon icon={faAccusoft} />
        <div>
          <h2>StudyFlow</h2>
          <p className={styles.subtitle}>Học thuật Xuất sắc</p>
        </div>
      </div>
      <div className={styles.content}>
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            isDashboard={item.id === IDNAVITEMS.DASHBOARD}
            path={item.path}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <NavItem
          path={"/login"}
          label={"Đăng xuất"}
          icon={faArrowRightFromBracket}
        />
      </div>
    </div>
  );
}
export default Sidebar;
