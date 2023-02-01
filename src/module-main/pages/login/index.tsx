import { useForm } from "react-hook-form";
// import logo from "../assets/img/logo.png"
import "./login.css";
import "./style.ts";
import * as LoginStyle from './style'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import LoginHead from "../../../components/commons/LoginHead";
import { useRef, useState } from "react";
import * as LoginStyleGl from '../../../styles/gridSystem'
import  ContentLogin from "../../../components/commons/ContentLogin";

const Login = () => {
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const userRef = useRef();
  const passwordRef = useRef();
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
  const Tittle: any = styled.h1`
    font: normal normal medium 30px/39px Roboto;
    letter-spacing: 0px;
    color: #575F6B;
  `
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('')
    setUser('')
  }

  return <>
    <LoginHead />
    {/* <div style={{background: '#ededf2'}}> */}
      <LoginStyleGl.SCGrid>
        <LoginStyleGl.SCRow>
          <LoginStyleGl.SCCol_5 >
            <ContentLogin />
          </LoginStyleGl.SCCol_5>
          <LoginStyleGl.SCCol_4 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <App>
              <Tittle>Login</Tittle>
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
          </LoginStyleGl.SCCol_4>
        </LoginStyleGl.SCRow>
      </LoginStyleGl.SCGrid>
    {/* </div> */}
    
  </>
}

export default Login