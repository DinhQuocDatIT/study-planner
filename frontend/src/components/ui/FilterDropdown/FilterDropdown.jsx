import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./FilterDropdown.module.css";
import { useState } from "react";
function FilterDropdown({
  label,
  options = [],
  rightIcon,
  leftIcon,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const content = (
    <>
      {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
      {label}
      {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
    </>
  );
  const handleSelect = (value) => {
    onChange?.(value);
    setIsOpen(false);
  };
  return (
    <div className={styles.wrapper}>
      <button onClick={() => setIsOpen(!isOpen)}>{content}</button>

      {isOpen && (
        <ul className={styles.menu}>
          {options.map((item, index) => (
            <li key={index} onClick={() => handleSelect(item.val)}>
              {item.color && (
                <div
                  className={styles.dot}
                  style={{ backgroundColor: item.color }}
                ></div>
              )}
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default FilterDropdown;
