import { useForm } from "react-hook-form";
import { RegisterRequest } from '../../types'
import { useRegisterAccount } from '../../services'
import {SCInputRegister} from './styles'
import { sum } from "../../../untils";


const Register = () => {

  const form = useForm<RegisterRequest>({
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
  });
 
  const { register, control, handleSubmit, getValues } = form;

  const { mutateAsync, error: errorRegister } = useRegisterAccount();

  const onSave = () => {
    const formData = getValues();
    console.log('sum',sum(1,2));
    console.log('formData', formData);
    mutateAsync(formData).then(() => {
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSave)}>
        <SCInputRegister type="firstName" {...register("firstName")} placeholder="First Name" />
        <SCInputRegister type="lastName" {...register("lastName")} placeholder="Last Name"/>
        <SCInputRegister type="email" {...register("email")} placeholder="E-Mail Address"/>
        <SCInputRegister type="password" {...register("password")} placeholder="Password"/>
        <SCInputRegister type="confirmPassword" {...register("confirmPassword")} placeholder="Password Confirmation"/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register