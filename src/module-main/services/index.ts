import { useMutation } from '@tanstack/react-query'
import { RegisterRequest } from '../types'
import { MainService} from './api'


export const useRegisterAccount = () => {
  return useMutation((payload: RegisterRequest) => {
    return MainService.register(payload);
  });
};
