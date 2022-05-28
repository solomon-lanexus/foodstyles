import { LoginDataResponse } from "@foodstyles/interfaces/mainInterfaces";
import { createAction } from "@foodstyles/redux/types/common";

import { SignInSuccess } from "@foodstyles/redux/types/User";

export enum UserEnums {
  SIGNIN = "SIGNIN",
  SIGNIN_SUCCESS = "SIGNIN_SUCCESS",

  SIGNUP = "SIGNUP",
  SIGNUP_SUCCESS = "SIGNUP_SUCCESS",
}

export const pushAuthenticatedUser = ( // THIS WILL NOT BE USED :| i hsould hve read the instructions.
  authentication: LoginDataResponse
): SignInSuccess => createAction(UserEnums.SIGNIN_SUCCESS, authentication);
