
import axios from "axios"
import { RegisterRequest, LoginRequest } from '../types'
import { LOCAL_STORAGE_KEY } from "../../helpers/constants"

const API_USER = `api/user`

export namespace MainService {

  export const register = (payload: RegisterRequest) => {
    return axios.post(`/${API_USER}/register/`, payload)
  }

  export const login = (payload: LoginRequest) => {
    return axios.post(`/${API_USER}/login/`, payload).then(resp => {
      localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN_PAYLOAD, JSON.stringify(resp.data));
      return Promise.resolve(resp);
    });
  }

  export const forgotPassword = (payload: { email: string }) => {
    return axios.post(`/${API_USER}/send-reset-pwd-email/`, payload)
  }
  export const changePassword = (payload: { code: string, password: string, password2: string }) => {
    return axios.post(`/${API_USER}/reset-pwd/NQ/${payload.code}`, payload)
  }
}