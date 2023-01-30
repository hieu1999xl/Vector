
export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type LoginRequest = RegisterRequest
  
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
