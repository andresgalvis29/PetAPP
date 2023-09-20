export interface Credential {
  idToken: string;
  accessToken: string;
  pendingToken?: any;
  providerId: string;
  signInMethod: string;
}

export interface Profile {
  name: string;
  link: string;
  granted_scopes: string;
  id: string;
  verified_email: boolean;
  given_name: string;
  locale: string;
  hd: string;
  family_name: string;
  email: string;
  picture: string;
}

export interface AdditionalUserInfo {
  isNewUser: boolean;
  providerId: string;
  profile: Profile;
}

export interface ProviderData {
  providerId: string;
  uid: string;
  displayName: string;
  email: string;
  phoneNumber?: any;
  photoURL: string;
}

export interface StsTokenManager {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

export interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  isAnonymous: boolean;
  photoURL: string;
  providerData: ProviderData[];
  stsTokenManager: StsTokenManager;
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
}

export interface GoogleCredentialClient {
  operationType: string;
  credential: Credential;
  additionalUserInfo: AdditionalUserInfo;
  user: User;
}

export interface GoogleCredentialServer {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  hd: string;
  email: string;
  email_verified: string;
  at_hash: string;
  iat: string;
  exp: string;
  alg: string;
  kid: string;
  typ: string;
}
