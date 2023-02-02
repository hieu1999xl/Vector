import { useForm } from "react-hook-form";
// import logo from "../assets/img/logo.png"
import "./login.css";
import "./style.ts";
import * as LoginStyle from './style'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import LoginHead from "../../../components/commons/LoginHead";
import { useState } from "react";
import * as LoginStyleGl from '../../../styles/gridSystem'
import  ContentLogin from "../../../components/commons/ContentLogin";
import { useMutation } from "@tanstack/react-query";
import http from "src/untils/http";
import { LoginRequest } from "src/module-main/types";

const Login = () => {

  const form = useForm<LoginRequest>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { register, control, handleSubmit, getValues } = form;

  const { mutate } = useMutation({
    mutationFn: (body) => {
      return http.post('api/user/login/', body)
    }
  })

  const onSave = () => {
    const formData = getValues();
    console.log('formData', formData);
    // mutate(formData)
  };
  
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
    padding-bottom: 20px;
    color: #575F6B;
    height: 39px;
  `
  const IputLogin: any = styled.input`
    border: none;
    text-indent: 60px;
    width: 513px;
    height: 80px;
    background: #f0f1f4;
    box-shadow: -4px -4px 20px #bbb7b7;
    border-radius: 40px;
    overflow: hidden;
    
  `
  
  return <>

    <LoginHead />
    <div style={{background: '#ececf1', height: 'calc(100vh - 273px)'}}>
      <LoginStyleGl.SCGrid style={{ height: '100%'}}>
        <LoginStyleGl.SCRow style={{ height: '100%'}}>
          <LoginStyleGl.SCCol_5 >
            <ContentLogin />
          </LoginStyleGl.SCCol_5>
          <LoginStyleGl.SCCol_4 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <App>
              <Tittle>Login</Tittle>
              <form className="form" onSubmit={handleSubmit(onSave)}>
                <div className="input-group">
                  <IputLogin type="email" {...register("email")}  placeholder="Enter Username"
                  />
                </div>
                <div className="input-group">
                  <IputLogin type="password" {...register("password")} placeholder="Enter Password" />
                </div>
                <div className="keep-signin">
                  <div>
                    <input type="checkbox" id="checkbox-1-1" className="custom-checkbox" />
                    <label htmlFor="checkbox-1-1" className="keep-me">Keep Me Signed In</label>
                  </div>

                  <div className="changepw">
                    <Link to={"/change_password"} className="forgot-pass"> Forgot Password ? </Link>
                  </div>
                </div>
                <LoginStyle.SCButtonLogin className="primary">Submit
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="15.582" height="15.582" viewBox="0 0 15.582 15.582">
                    <path id="Icon_ionic-md-arrow-forward" data-name="Icon ionic-md-arrow-forward" d="M5.977,14.741H17.809l-5.454,5.454,1.412,1.363,7.791-7.791L13.767,5.977,12.4,7.34l5.4,5.454H5.977Z" transform="translate(-5.977 -5.977)" fill="#575f6b"/>
                  </svg> */}
                </LoginStyle.SCButtonLogin>
                
              </form>
            </App>
          </LoginStyleGl.SCCol_4>
        </LoginStyleGl.SCRow>
      </LoginStyleGl.SCGrid>
    </div>
    
  </>
}

export default Login