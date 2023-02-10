import { useForm } from "react-hook-form";
import "./login.css";
import * as LoginStyle from './style'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import LoginHead from "../../../components/commons/LoginHead";
import * as LoginStyleGl from '../../../styles/gridSystem'
import ContentLogin from "../../../components/commons/ContentLogin";
import { notifyError, notifySuccess } from "../../../helpers/notify";
import { LoginRequest } from "../../types";
import { useLoginAccount } from "../../services";
import { hasUdfToken } from "../../../helpers/utils";
import { Errors } from "../../../components";
import { useState } from "react";
import { log } from "console";

const Login = () => {

  if (hasUdfToken()) {
    return <Navigate to="/" replace={true} />;
  }

  const [remember, setRemember] = useState(false)
  console.log(remember)

  const navigate = useNavigate()
  const form = useForm<LoginRequest>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { register, handleSubmit, getValues, formState: { errors } } = form;

  const { mutate: mutateLogin, error } = useLoginAccount()

  const onSave = () => {
    const formData = getValues();
    mutateLogin(formData, {
      onSuccess: (data) => {
        navigate('/')
        notifySuccess('Login success !')
        // if(!remember) {
        //   // @ts-ignore: Unreachable code error
        //   localStorage.removeItem('token')
        // }
      },
    })
    
    if (error) {
      // @ts-ignore: Unreachable code error
      notifyError(error.error.non_field_errors[0])
    }
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
                  <LoginStyle.IputLogin error={errors.email} type="text" {...register("email", { required: true})} placeholder="Enter Username"
                  />
                  <Errors errors={errors} name="email" />
                </div>
                <div className="input-group">
                  <LoginStyle.IputLogin error={errors.password} type="password" {...register("password", { required: true })} placeholder="Enter Password" />
                  <Errors errors={errors} name="password" />
                </div>
                <div className="keep-signin">
                  <div>
                    <input onChange={(e) => setRemember(!remember)}  type="checkbox" id="checkbox-1-1" className="custom-checkbox" />
                    <label htmlFor="checkbox-1-1" className="keep-me">Keep Me Signed In</label>
                  </div>

                  <div className="changepw">
                    <Link to={"/forgot-password"} className="text-auth"> Forgot Password ? </Link>
                  </div>
                </div>
                <LoginStyle.SCButtonLogin className="primary" >Submit

                  {/* <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.582" height="15.582" viewBox="0 0 15.582 15.582">
                      <path id="Icon_ionic-md-arrow-forward" data-name="Icon ionic-md-arrow-forward" d="M5.977,14.741H17.809l-5.454,5.454,1.412,1.363,7.791-7.791L13.767,5.977,12.4,7.34l5.4,5.454H5.977Z" transform="translate(-5.977 -5.977)" fill="#575f6b" />
                    </svg>
                  </div> */}
                </LoginStyle.SCButtonLogin >
                <div className="register">
                  <Link to={"/register"} className="text-auth"> Don't have an account yet? Singup Now</Link>
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