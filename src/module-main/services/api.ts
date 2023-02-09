import { ChangePassRequest } from '../types/User';

import axios from "axios"
import { RegisterRequest, LoginRequest } from '../types'
import { LOCAL_STORAGE_KEY } from "../../helpers/constants"
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { isEmpty } from "lodash";

const API_USER = `api/user`

interface Token {
  tokenType?: string;
  access?: string;
  refresh?: string;
  expiryAt?: number;
  apigeeToken: { access_token: string };
}

export namespace MainService {

  export const acquireToken = async () => {
    let token: Token;
    try {
      token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN_PAYLOAD) || '{}');
      // if (token.expiryAt && token.accessToken && token.refreshToken) {
      //   // minus 20 seconds for network latency
      //   if (new Date(token.expiryAt - 20 * 1000) > new Date()) {
      //     return token;
      //   }
      //   console.log('token expired, requesting a new token', 'expired at', new Date(token.expiryAt));
      //   return refreshToken(token.refreshToken);
      // } else {
      //   return undefined;
      // }
      return isEmpty(token) ? undefined : token;
    } catch {
      // in case token modified by human
      return undefined;
    }
  };

  // get a new access_token by refresh_token
  export const refreshToken = async (refreshToken: string) => {
    try {
      const response = await axios.get<Token>(`${API_USER}/token/refresh/`, {
        headers: { Authorization: `Bearer ${refreshToken}` }
      });
      const token = response.data;
      localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN_PAYLOAD, JSON.stringify(token));
      return token;
    } catch {
      //  refresh token not valid or expired
      return undefined;
    }
  };

  export const logout = async () => {
    const queryClient = useQueryClient();
    const { refresh }: Token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN_PAYLOAD) || '{}');
    try {
      // logout from server
      await axios.post(getLogoutUrl(), { refresh });
    } finally {
      queryClient.clear();
      localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN_PAYLOAD);
    }
  };

  export const getLogoutUrl = () => {
    return `/${API_USER}/logout/`
  }

  export const register = (payload: RegisterRequest) => {
    return axios.post(`/${API_USER}/register/`, payload)
  }

  export const login = (payload: LoginRequest) => {
    return axios.post(`/${API_USER}/login/`, payload).then(resp => {
      localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN_PAYLOAD, JSON.stringify(resp.data.token));
      return Promise.resolve(resp);
    });
  }

  export const forgotPassword = (payload: { email: string }) => {
    return axios.post(`/${API_USER}/send-reset-pwd-email/`, payload)
  }
  export const changePassword = (payload: ChangePassRequest) => {
    return axios.post(`/${API_USER}/reset-pwd/NQ/${payload.code}`, payload)
  }

  export const getProfile = () => {
    return axios.get(`/${API_USER}/profile/`)
  }

}