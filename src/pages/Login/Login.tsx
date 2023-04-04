import classNames from "classnames/bind";

import styles from "./Login.module.scss";
import { Radio } from "@mui/material";
import Button from "@mui/material/Button";

const cx = classNames.bind(styles);

const Login: React.FC<any> = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("backgroup")}>
        <h1>Sign in</h1>
        <div className={cx("email-address")}>
          <p>Email address</p>
          <input
            type="email"
            placeholder="Enter your email"
            className={cx("input")}
          ></input>
        </div>
        <div className={cx("email-address")}>
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className={cx("input")}
          ></input>
        </div>
        <div className={cx("rmMe")}>
          <input type="checkbox"></input>
          <span>Remember me</span>
        </div>
        <div >
          <Button variant="contained" disableElevation className={cx("btn")}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
