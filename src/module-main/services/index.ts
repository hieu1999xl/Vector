import { useMutation } from '@tanstack/react-query'
import { RegisterRequest , LoginRequest } from '../types'
import { MainService} from './api'


export const useRegisterAccount = () => {
  return useMutation((payload: RegisterRequest) => {
    return MainService.register(payload);
  });
};
export const useLoginAccount = () => {
  return useMutation((payload: LoginRequest) => {
    return MainService.login(payload);
  });
};
