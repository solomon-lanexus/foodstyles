import { all, put, takeLatest } from "redux-saga/effects";
import LoggingService from "@foodstyles/utils/logging/LoggingService";

import { mapLoginDataResponse } from "@foodstyles/utils/dbhelpers/dbMaps";

import {
  UserEnums,
  pushAuthenticatedUser,
} from "@foodstyles/redux/actions/User";

import { SignIn, SignInSuccess } from "@foodstyles/redux/types/User";


// NOTE: This will not be used since im just going to implement the Cards.
const logError = (error: any) => {
  LoggingService.error(`USER DATA HANDLER ERROR: ${error.message}`);
  LoggingService.error("Stack", error.stack);
};

function* signIn(action: SignIn) {
  try {
    yield put(pushAuthenticatedUser(mapLoginDataResponse(action.payload)));
  } catch (error) {
    logError(error);
  }
}

function* signInSuccess(action: SignInSuccess) {
  try {
    yield put(pushAuthenticatedUser(mapLoginDataResponse(action.payload)));
  } catch (error) {
    logError(error);
  }
}

export default all([
  takeLatest(UserEnums.SIGNIN, signIn),
  takeLatest(UserEnums.SIGNIN_SUCCESS, signInSuccess),
]);
