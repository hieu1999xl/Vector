import { useForm } from "react-hook-form";
import "../login/login.css";
import "../login/style";
import * as RegisterStyle from '../login/style'
import { useNavigate } from 'react-router-dom';
import LoginHead from "../../../components/commons/LoginHead";
import * as LoginStyleGl from '../../../styles/gridSystem'
import ContentLogin from "../../../components/commons/ContentLogin";
import {notifyError, notifySuccess} from "../../../helpers/notify";
import { useForgotPassword } from "../../services";
import { Errors } from "../../../components";

const ForgotPassword = () => {
  const navigate = useNavigate()

  const form = useForm<{ email: string }>({
    defaultValues: {
      email: '',
    },
  });
  const { register, handleSubmit, getValues, formState: { errors } } = form;

  const { mutateAsync: mutateForgotPassword } = useForgotPassword()

  const onSave = () => {
    const formData = getValues();
    mutateForgotPassword(formData, {
      onSuccess: (data) => {
        navigate('/change-password')
        notifySuccess('Please check your email')

      },
      onError: (data) => {
        // @ts-ignore: Unreachable code error
        notifyError(data.error)
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
            <RegisterStyle.App>
              <RegisterStyle.Tittle>Forgot Password</RegisterStyle.Tittle>
              <form className="form" onSubmit={handleSubmit(onSave)}>
                <div className="input-group-reg">
                  <RegisterStyle.IputLogin type="text" {...register("email", {required: true})} placeholder="Enter Email" />
                  <Errors errors={errors} name="email" />
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

export default ForgotPassword