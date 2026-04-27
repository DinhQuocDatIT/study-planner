import { Link ,NavLink} from "react-router-dom";
import styles from "./NavItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavItem({ isDashboard, label, path, icon }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${styles.wrapper} 
        ${isActive ? styles.active : ""} 
        ${isDashboard ? styles.isdashboard : ""}`
      }
    >
      <FontAwesomeIcon icon={icon} />
      {label}
    </NavLink>
  );
}
export default NavItem;
