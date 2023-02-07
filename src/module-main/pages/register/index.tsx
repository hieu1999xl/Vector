import { useForm } from "react-hook-form";
// import logo from "../assets/img/logo.png"
import "../login/login.css";
import "../login/style.ts";
import * as RegisterStyle from '../login/style'
import { useNavigate } from 'react-router-dom';
import LoginHead from "../../../components/commons/LoginHead";
import * as LoginStyleGl from '../../../styles/gridSystem'
import ContentLogin from "../../../components/commons/ContentLogin";
import {Notify_error, Notify_success} from "../../../components/commons/Notify";
import { RegisterRequest } from "src/module-main/types";
import { useRegisterAccount } from "../../services";
import { log } from "console";


const Login = () => {
  const navigate = useNavigate()

  const form = useForm<RegisterRequest>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password2: '',
      tc: true
    },
  });
  const { register, control, handleSubmit, getValues } = form;
  const { mutate: mutateRegister, error } = useRegisterAccount()

  const onSave = () => {
    const formData = getValues();
    mutateRegister( formData , {
      onSuccess: () => {
        navigate('/login')
        Notify_success("Register Success")
      },
      onError: (error) => {
        // @ts-ignore: Unreachable code error
        Notify_error(error.message)
      }
    })
  };

  return <>

    <LoginHead />
    <div style={{ background: '#ececf1', height: 'calc(100vh - 273px)' }}>
      <LoginStyleGl.SCGrid style={{ height: '100%' }}>
        <LoginStyleGl.SCRow style={{ height: '100%' }}>
          <LoginStyleGl.SCCol_5 >
            <ContentLogin />
          </LoginStyleGl.SCCol_5>
          <LoginStyleGl.SCCol_4 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <RegisterStyle.App>
              <RegisterStyle.Tittle>Register</RegisterStyle.Tittle>
              <form className="form" onSubmit={handleSubmit(onSave)}>
                <div className="input-group-reg">
                  <RegisterStyle.IputLogin type="text" {...register("name")} placeholder="Enter Username" />
                </div>
                <div className="input-group-reg">
                  <RegisterStyle.IputLogin type="text" {...register("email")} placeholder="Enter Email" />
                </div>
                <div className="input-group-reg">
                  <RegisterStyle.IputLogin type="password" {...register("password")} placeholder="Enter Password" />
                </div>
                <div className="input-group-reg">
                  <RegisterStyle.IputLogin type="password" {...register("password2")} placeholder="Enter Confirm Password" />
                </div>
                
                <RegisterStyle.SCButtonLogin className="primary">Submit
                </RegisterStyle.SCButtonLogin>

              </form>
            </RegisterStyle.App>
          </LoginStyleGl.SCCol_4>
        </LoginStyleGl.SCRow>
      </LoginStyleGl.SCGrid>
    </div>

  </>
}



export default Login