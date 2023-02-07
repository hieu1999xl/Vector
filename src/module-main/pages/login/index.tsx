import { useForm } from "react-hook-form";
import "./login.css";
import * as LoginStyle from './style'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import LoginHead from "../../../components/commons/LoginHead";
import * as LoginStyleGl from '../../../styles/gridSystem'
import ContentLogin from "../../../components/commons/ContentLogin";
import { useMutation } from "@tanstack/react-query";
import http from "../../../untils/http";
import { LoginRequest } from "src/module-main/types";
import { toast } from 'react-toastify';
import { useLoginAccount } from "../../services";

const Login = () => {
  const navigate = useNavigate()

  const notify = (data: string) => toast.error(data, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "colored",
  });

  const form = useForm<LoginRequest>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { register, handleSubmit, getValues } = form;

  const { mutate: mutateLogin, error } = useLoginAccount()

  const onSave = () => {
    const formData = getValues();
    mutateLogin(formData, {
      onSuccess: () => {
        navigate('/')
      },
      onError: (data) => {
        // @ts-ignore: Unreachable code error
        notify(data.response.data)
      }
    })
  };

  return <>

    <LoginHead />
    <div style={{ background: '#ececf1', height: 'calc(100vh - 273px)' }}>
      <LoginStyleGl.SCGrid >
        <LoginStyleGl.SCRow >
          <LoginStyleGl.SCCol_5 >
            <ContentLogin />
          </LoginStyleGl.SCCol_5>
          <LoginStyleGl.SCCol_4 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LoginStyle.App>
              <LoginStyle.Tittle>Login</LoginStyle.Tittle>
              <form className="form" onSubmit={handleSubmit(onSave)}>
                <div className="input-group">
                  <LoginStyle.IputLogin type="text" {...register("email")} placeholder="Enter Username"
                  />
                </div>
                <div className="input-group">
                  <LoginStyle.IputLogin type="password" {...register("password")} placeholder="Enter Password" />
                </div>
                <div className="keep-signin">
                  <div>
                    <input type="checkbox" id="checkbox-1-1" className="custom-checkbox" />
                    <label htmlFor="checkbox-1-1" className="keep-me">Keep Me Signed In</label>
                  </div>

                  <div className="changepw">
                    <Link to={"/forgot_password"} className="text-auth"> Forgot Password ? </Link>
                  </div>
                </div>
                <LoginStyle.SCButtonLogin className="primary">Submit
                  {/* <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.582" height="15.582" viewBox="0 0 15.582 15.582">
                      <path id="Icon_ionic-md-arrow-forward" data-name="Icon ionic-md-arrow-forward" d="M5.977,14.741H17.809l-5.454,5.454,1.412,1.363,7.791-7.791L13.767,5.977,12.4,7.34l5.4,5.454H5.977Z" transform="translate(-5.977 -5.977)" fill="#575f6b" />
                    </svg>
                  </div> */}
                </LoginStyle.SCButtonLogin>
                <div className="register">
                    <Link to={"/register"} className="text-auth"> Singup Now </Link>
                </div>
              </form>
            </LoginStyle.App>
          </LoginStyleGl.SCCol_4>
        </LoginStyleGl.SCRow>
      </LoginStyleGl.SCGrid>
    </div>

  </>
}



export default Login