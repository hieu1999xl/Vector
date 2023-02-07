
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

export type User = {
  id: number;
  salutation: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  emailId: string;
  loginId: string;
  countryCode: string;
  mobileNo: string;
  userType: string;
  lastLogin: Date;
  active: boolean;
  timeZone: string;
};
