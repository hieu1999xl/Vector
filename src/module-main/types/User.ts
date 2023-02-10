
export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  password2: string;
  tc: boolean
}
export interface LoginRequest {
  email: string;
  password: string;
}
export interface ChangePassRequest {
  code: string;
  password: string;
  password2: string;
}

export type User = {
  id: number;
  email: string;
  role?: string;
  is_admin: boolean;
  name: string
};
