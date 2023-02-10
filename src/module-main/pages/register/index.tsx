import { useForm } from "react-hook-form";
import "../login/login.css";
import "../login/style";
import * as RegisterStyle from '../login/style'
import { useNavigate } from 'react-router-dom';
import LoginHead from "../../../components/commons/LoginHead";
import * as LoginStyleGl from '../../../styles/gridSystem'
import ContentLogin from "../../../components/commons/ContentLogin";
import { notifyError, notifySuccess } from "../../../helpers/notify";
import { RegisterRequest } from "src/module-main/types";
import { useRegisterAccount } from "../../services";
import { Errors } from "../../../components";

const Register = () => {
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
  const { register, handleSubmit, getValues, formState: { errors } } = form;
  const { mutate: mutateRegister } = useRegisterAccount()

  const onSave = () => {
    const formData = getValues();
    mutateRegister(formData, {
      onSuccess: () => {
        navigate('/login')
        notifySuccess("Register Success")
      },
      onError: (error) => {
        // @ts-ignore: Unreachable code error
        notifyError(error.message)
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
                  <RegisterStyle.IputLogin type="text" {...register("name", { required: true })} placeholder="Enter Fullname" />
                  <Errors errors={errors} name="name" />
                </div>
                <div className="input-group-reg">
                  <RegisterStyle.IputLogin type="text" {...register("email", {
                    required: true, pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Email format is wrong"
                    }
                  })} placeholder="Enter Email" />
                  <Errors errors={errors} name="email" />
                </div>
                <div className="input-group-reg">
                  <RegisterStyle.IputLogin type="password" {...register("password", { required: true })} placeholder="Enter Password" />
                  <Errors errors={errors} name="password" />
                </div>
                <div className="input-group-reg">
                  <RegisterStyle.IputLogin type="password" {...register("password2", { required: true })} placeholder="Enter Confirm Password" />
                  <Errors errors={errors} name="password2" />
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



export default Register