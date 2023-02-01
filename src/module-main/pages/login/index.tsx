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
  const navigate = useNavigate()

  const App: any = styled.div`  
                // background: #f7fafc;
                // border-radius: 4px;
                // box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
                max-width: 615px;
                // padding-bottom: 66px;
                // padding-top: 46px;
                text-align: center;
                border-left: 1px solid #c9c1c1;
                width: 90%;
            `;
  const Tittle: any = styled.h1`
    font: normal normal medium 30px/39px Roboto;
    letter-spacing: 0px;
    color: #575F6B;
    height: 39px;
  `
  const IputLogin: any = styled.input`
    text-indent: 30px;
    width: 513px;
    height: 80px;
    background: transparent linear-gradient(277deg, #F2F3F6 0%, #E5E6EC 100%) 0% 0% no-repeat padding-box;
    box-shadow: -4px -4px 20px #FFFFFF;
    border-radius: 40px;
  `
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('')
    setPwd('')
  }

  return <>

    <LoginHead />
    <div style={{background: '#ececf1', height: '69vh'}}>
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
                  <IputLogin type="text" name="email" placeholder="Enter Username"
                    onChange={(e: any) => setUser(e.target.value)}
                    value={user}
                  />
                </div>
                <div className="input-group">
                  <IputLogin type="password" name="password" placeholder="Enter Password" onChange={(e: any) => setPwd(e.target.value)}
                    value={pwd} />
                </div>
                <div className="changepw">
                  <Link to={"/change_password"}> Forgot Password ? </Link>
                </div>
                <LoginStyle.SCButtonLogin className="primary">Submit</LoginStyle.SCButtonLogin>
                
              </form>
            </App>
          </LoginStyleGl.SCCol_4>
        </LoginStyleGl.SCRow>
      </LoginStyleGl.SCGrid>
    </div>
    
  </>
}

export default Login