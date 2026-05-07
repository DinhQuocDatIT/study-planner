import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Button.module.css";
import { NavLink } from "react-router-dom";

function Button({
  variant = "primary",
  type = "button",
  icon = null,
  to = null,
  rightIcon = null,
  leftIcon = null,
  children,
  onClick,
}) {
  const variantClass = styles[variant] || styles.primary;

  const content = (
    <>
      {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
      {leftIcon && <FontAwesomeIcon icon={leftIcon} className={styles.icon} />}
      <span>{children}</span>
      {rightIcon && (
        <FontAwesomeIcon icon={rightIcon} className={styles.icon} />
      )}
    </>
  );

  if (to !== null) {
    return (
      <NavLink
        className={`${styles.wrapper} ${variantClass}`}
        onClick={onClick}
        to={to}
      >
        {content}
      </NavLink>
    );
  }

  return (
    <button
      className={`${styles.wrapper} ${variantClass}`}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
}

export default Button;
