import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faAccusoft } from "@fortawesome/free-brands-svg-icons";
import styles from "./Register.module.css";
import Button from "../../../components/ui/Button/Button";
import { Google } from "../../../assets";
import { useState } from "react";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const handleSubmit = (e) => {
    setMessageError("");
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessageError("Mật khẩu không khớp");
      return;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faAccusoft} />
          <h2>StudyFlow</h2>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.headerform}>
          <span>Tạo tài khoản của bạn</span>

          <p>Bắt đầu hành trình rèn luyện sự tập trung.</p>
        </div>

        <label htmlFor="name">Họ tên</label>
        <input
          id="name"
          type="text"
          placeholder="Nhập họ tên của bạn."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
        <div className={styles.row}>
          <div>
            <label htmlFor="password">Mật khẩu</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required={true}
            />
          </div>
        </div>
        {messageError && <div className={styles.error}>{messageError}</div>}

        <Button type="submit">Đăng ký</Button>
        <div className={styles.divider}>
          <span>HOẶC</span>
        </div>
        <Button variant="outline" type="button">
          <img src={Google} title="google" alt="Google logo" />
          Đăng ký với google
        </Button>
      </form>
      <div className={styles.footer}>
        Đã có tài khoản?<Link to="/login"> Đăng nhập</Link>
      </div>
    </div>
  );
}
export default Register;
