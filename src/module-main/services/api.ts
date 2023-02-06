
import axios from "axios"
import { RegisterRequest, LoginRequest } from '../types'

export namespace MainService {

  export const register = (payload: RegisterRequest) => {
    return axios.post('/register', payload)
  }
  export const login = (payload: LoginRequest) => {
    return axios.post('/user/login', payload)
  }
}