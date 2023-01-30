import { useForm } from "react-hook-form";
// import logo from "../assets/img/logo.png"
import "./login.css";
import "./style.ts";
import * as LoginStyle from './style'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const navigate = useNavigate()

  const App: any = styled.div`  
                background: #f7fafc;
                border-radius: 4px;
                box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
                max-width: 615px;
                padding-bottom: 66px;
                padding-top: 46px;
                text-align: center;
                width: 90%;
            `;
  const Img: any = styled.img`
    max-width: 90%;
  `
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('')
    setUser('')
  }

  return <>
    <App>
      <Img src="../assets/img/logo.png" alt="" />
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="example@email.com"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={(e) => setPwd(e.target.value)}
            value={pwd} />
        </div>
        <LoginStyle.SCButtonLogin className="primary">Submit</LoginStyle.SCButtonLogin>
        <div className="changepw">
          <Link to={"/changepassword"}> Quên mật khẩu</Link>
        </div>
      </form>
      <LoginStyle.SCButtonLogin className="secondary" onClick={() => navigate("/register")}>
        Đăng kí
      </LoginStyle.SCButtonLogin>
    </App>
  </>
}

export default Login