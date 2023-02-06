
import axios from "axios"
import http from "../../untils/http"
import { RegisterRequest, LoginRequest } from '../types'

export namespace MainService { 

  export const register = (payload: RegisterRequest) => {
    return http.post('/register', payload)
  }
  export const login = (payload: LoginRequest) => {
    return axios.post('/api/user/login/', payload)
  }
}