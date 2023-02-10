import { useForm } from "react-hook-form";
import "../login/login.css";
import "../login/style";
import * as RegisterStyle from '../login/style'
import { useNavigate } from 'react-router-dom';
import LoginHead from "../../../components/commons/LoginHead";
import * as LoginStyleGl from '../../../styles/gridSystem'
import ContentLogin from "../../../components/commons/ContentLogin";
import {notifyError, notifySuccess} from "../../../helpers/notify";
import { useChangePassword } from "../../services";
import { Errors } from "../../../components";

const ChangePassword = () => {
  const navigate = useNavigate()

  const form = useForm<{password: string, password2: string ,code: string}>({
    defaultValues: {
      password: '',
      password2: '',
    },
  });
  const { register, handleSubmit, getValues , formState: { errors }} = form;

  const { mutateAsync: mutateForgotPassword } = useChangePassword()

  const onSave = () => {
    const formData = getValues();
    mutateForgotPassword(formData, {
      onSuccess: (data) => {
        navigate('/login')
        notifySuccess(data.data.msg)
      },
      onError: (data) => {
        // @ts-ignore: Unreachable code error
        notifyError('Something wrong !')
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
              <RegisterStyle.Tittle>Change Password</RegisterStyle.Tittle>
              <form className="form" onSubmit={handleSubmit(onSave)}>
              <div className="input-group-reg">
                  <RegisterStyle.IputLogin type="text" {...register("code" , {required: true})} placeholder="Enter Code" />
                  <Errors errors={errors} name="code" />
                </div>
                <div className="input-group-reg">
                  <RegisterStyle.IputLogin type="text" {...register("password", {required: true})} placeholder="Enter new password" />
                  <Errors errors={errors} name="password" />
                </div>
                <div className="input-group-reg">
                  <RegisterStyle.IputLogin type="text" {...register("password2", {required: true})} placeholder="Enter comfirm new password" />
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

export default ChangePassword