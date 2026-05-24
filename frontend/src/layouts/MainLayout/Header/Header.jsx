import styles from "./Header.module.css";
import {
  faGear,
  faSquareCaretRight,
  faSquareCaretLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { defaultAvatar } from "../../../assets";

function Header({ isOpenSidebar, toggleSidebar }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <FontAwesomeIcon
          icon={isOpenSidebar ? faSquareCaretLeft : faSquareCaretRight}
          onClick={toggleSidebar}
        />
        <div className={styles.search}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Tìm kiếm ..." />
        </div>
      </div>
      <div className={styles.right}>
        <FontAwesomeIcon icon={faGear} />
        <FontAwesomeIcon icon={faBell} />
       <img  src={defaultAvatar} title="avatar" />
      </div>
    </div>
  );
}
export default Header;
