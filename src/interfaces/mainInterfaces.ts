export interface LoginDataResponse {
  id: string;
  email: string;
  name: string;
  facebookId: string;
  googleId: string;
  appleId: string;
}

export interface RegistrationData {
  email: string;
  password: string;
}

export interface CardsListData {
  id: string;
  name: string;
}

export interface CardsListDataWithMutation {
  id: string;
  name: string;
  shareMutation: string;
}
