import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAccusoft } from "@fortawesome/free-brands-svg-icons";
import styles from "./Login.module.css";
import Button from "../../../components/ui/Button/Button";
import { Google } from "../../../assets";
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
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
          <span>Chào mừng quay lại</span>

          <p>Vui lòng nhập thông tin để tiếp tục hành trình của bạn</p>
        </div>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
        <label htmlFor="password">Mật khẩu</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
        <Button type="submit">Đăng nhập</Button>
        <div className={styles.divider}>
          <span>HOẶC</span>
        </div>
        <Button variant="outline" type="button">
          <img src={Google} title="google" alt="Google logo" />
          Đăng nhập với google
        </Button>
      </form>
      <div className={styles.footer}>
        Bạn chưa có tài khoản?<Link to="/register"> Đăng ký</Link>
      </div>
    </div>
  );
}
export default Login;
