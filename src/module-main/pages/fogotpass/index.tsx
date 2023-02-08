import { useForm } from "react-hook-form";
// import logo from "../assets/img/logo.png"
import "../login/login.css";
import "../login/style.ts";
import * as RegisterStyle from '../login/style'
import { useNavigate } from 'react-router-dom';
import LoginHead from "../../../components/commons/LoginHead";
import * as LoginStyleGl from '../../../styles/gridSystem'
import ContentLogin from "../../../components/commons/ContentLogin";
import { useMutation } from "@tanstack/react-query";
import { RegisterRequest } from "src/module-main/types";
import { toast } from 'react-toastify';
import axios from "axios";


const Forgot_password = () => {
  const navigate = useNavigate()

  const notify = (data: string) => toast.error(data, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "colored",
  });

  const form = useForm<RegisterRequest>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password2: ''
    },
  });
  const { register, control, handleSubmit, getValues } = form;

  const { mutate } = useMutation({
    mutationFn: (body: RegisterRequest) => {
      return axios.post('user/send-reset-pwd-email/', body)
    }
  })

  const onSave = () => {
    const formData = getValues();
    console.log(formData)
    mutate(formData, {
      onSuccess: () => {
        navigate('/login')
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
      <LoginStyleGl.SCGrid style={{ height: '100%' }}>
        <LoginStyleGl.SCRow style={{ height: '100%' }}>
          <LoginStyleGl.SCCol_5 >
            <ContentLogin />
          </LoginStyleGl.SCCol_5>
          <LoginStyleGl.SCCol_4 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <RegisterStyle.App>
              <RegisterStyle.Tittle>Forgot Password</RegisterStyle.Tittle>
              <form className="form" onSubmit={handleSubmit(onSave)}>
                <div className="input-group-reg">
                  <RegisterStyle.IputLogin type="text" {...register("email")} placeholder="Enter Email" />
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



export default Forgot_password