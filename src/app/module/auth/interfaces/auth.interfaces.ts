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

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}
