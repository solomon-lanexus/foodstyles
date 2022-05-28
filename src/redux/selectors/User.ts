import {RootState} from '@foodstyles/redux/configureStore';
import {createSelector} from 'reselect';

export const selectUser = (state: RootState) => state.User;

export const loggingIn = createSelector(selectUser, login => login.loggingIn);

export const loginStatus = createSelector(
  selectUser,
  login => login.loginStatus,
);

export const zipStatus = createSelector(selectUser, login => login.zipStatus);

export const validatingZip = createSelector(selectUser, z => z.validatingZip);

export const zipStatusResponse = createSelector(
  selectUser,
  login => login.zipValidationReponse,
);

export const aliasValidationStatus = createSelector(
  selectUser,
  a => a.validatingAlias,
);

export const emailValidationStatus = createSelector(
  selectUser,
  a => a.validatingEmail,
);

export const userAvatar = createSelector(selectUser, ava => ava.avatarData);

export const isValidEmail = createSelector(
  selectUser,
  email => email.validEmail,
);

export const isValidAlias = createSelector(
  selectUser,
  alias => alias.validAlias,
);

export const emailValidationResponse = createSelector(
  selectUser,
  resp => resp.emailValidationResponse,
);

export const aliasValidationResponse = createSelector(
  selectUser,
  resp => resp.aliasValidationResponse,
);

export const mainProfile = createSelector(
  selectUser,
  profile => profile.Profile,
);

export const currentMainAuthentication = createSelector(
  selectUser,
  auth => auth.Authentication,
);

export const signupData = createSelector(selectUser, signup => signup.SignUp);

export const Preferences = createSelector(selectUser, pref => pref.Preferences);
