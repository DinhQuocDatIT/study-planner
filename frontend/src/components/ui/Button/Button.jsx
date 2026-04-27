import styles from "./Button.module.css";

function Button({ variant = "primary", type = "button", children, onClick }) {
  let classes = styles.primary;
  if (variant === "outline") {
    classes = styles.outline;
  }

  return (
    <button
      className={`${styles.wrapper} ${classes}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
