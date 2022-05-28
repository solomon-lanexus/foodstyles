import { LoginDataResponse } from "@foodstyles/interfaces/mainInterfaces";
import { UserEnums } from "@foodstyles/redux/actions/User";
import { IAction } from "./common";


export type SignIn = IAction<
  typeof UserEnums.SIGNIN,
  {username: string, password: string}
>;


export type SignInSuccess = IAction<
  typeof UserEnums.SIGNIN_SUCCESS,
  LoginDataResponse
>;

export type MainProfileActions = SignInSuccess;
