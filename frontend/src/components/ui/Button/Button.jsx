import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Button.module.css";
import { NavLink } from "react-router-dom";

function Button({
  variant = "primary",
  type = "button",
  icon = null,
  to = null,
  children,
  onClick,
}) {
  let classes = styles.primary;
  if (variant === "outline") {
    classes = styles.outline;
  }
  if (to !== null) {
    return (
      <NavLink
        className={`${styles.wrapper} ${classes}`}
        onClick={onClick}
        type={type}
        to={to}
      >
        {icon && <FontAwesomeIcon icon={icon} />}

        {children}
      </NavLink>
    );
  }
  return (
    <button
      className={`${styles.wrapper} ${classes}`}
      onClick={onClick}
      type={type}
    >
      {icon && <FontAwesomeIcon icon={icon} />}

      {children}
    </button>
  );
}

export default Button;
