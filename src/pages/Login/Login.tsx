import classNames from "classnames/bind";

import styles from "./Login.module.scss";
import { Radio } from "@mui/material";
import Button from "@mui/material/Button";

import MyContext from "../../components/Context/MyContextProps";
import { useContext } from "react";
import { Navigate, useNavigate } from 'react-router-dom';


const cx = classNames.bind(styles);

const Login: React.FC<any> = ({ children }) => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(MyContext);
  const handleLogin =()=>{
    localStorage.removeItem('token');
    localStorage.setItem('token','token');
    setToken(localStorage.getItem('token')as string);
    navigate("/")
  }
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
        <div className={cx('btn-login')}>
          <Button variant="contained" onClick={handleLogin} disableElevation className={cx("btn")}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
