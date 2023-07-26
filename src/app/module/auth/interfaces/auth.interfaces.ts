export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface newUser {
  name: string;
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface SignIn {
  name: string;
  email: string;
  password: string;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}
