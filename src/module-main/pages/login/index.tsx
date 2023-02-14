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
      },
    })
    
    if (error) {
      // @ts-ignore: Unreachable code error
      notifyError(error.error.non_field_errors[0])
    }
  };

  return <>

    <LoginStyle.AuthenForm>
      <LoginHead />
        <LoginStyleGl.SCGrid >
          <LoginStyleGl.SCRow >
            <LoginStyleGl.SCCol_5 >
              <ContentLogin />
            </LoginStyleGl.SCCol_5>
            <LoginStyleGl.SCCol_4 >
              <LoginStyle.App>
                <LoginStyle.Tittle>Login</LoginStyle.Tittle>
                <form onSubmit={handleSubmit(onSave)}>
                  <div className="input-group">
                    <LoginStyle.IputLogin error={errors.email} type="text" {...register("email", { required: true,
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Email format is wrong"
                    },})} placeholder="Enter Username"
                    />
                    <Errors errors={errors} name="email" />
                  </div>
                  <div className="input-group">
                    <LoginStyle.IputLogin error={errors.password} type="password" {...register("password", { required: true,
                    minLength: {
                      value: 8,
                      message: "Password must exceed 8 characters"
                    } })} placeholder="Enter Password" />
                    <Errors errors={errors} name="password" />
                  </div>
                  <LoginStyle.KeepSingIn>
                    <div>
                      <input onChange={(e) => setRemember(!remember)}  type="checkbox" id="checkbox-1-1" className="custom-checkbox" />
                      <label htmlFor="checkbox-1-1" className="keep-me">Keep Me Signed In</label>
                    </div>
                    <LoginStyle.ChangePassText>
                      <Link to={"/forgot-password"} className="text-auth"> Forgot Password ? </Link>
                    </LoginStyle.ChangePassText>
                  </LoginStyle.KeepSingIn>
                  <LoginStyle.SCButtonLogin >Submit</LoginStyle.SCButtonLogin >
                  <LoginStyle.Regrister>
                    <Link to={"/register"} className="text-auth"> Don't have an account yet? Singup Now</Link>
                  </LoginStyle.Regrister>
                </form>
              </LoginStyle.App>
            </LoginStyleGl.SCCol_4>
          </LoginStyleGl.SCRow>
        </LoginStyleGl.SCGrid>
    </LoginStyle.AuthenForm>

  </>
}



export default Login