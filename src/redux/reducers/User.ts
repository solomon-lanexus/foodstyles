import produce from "immer";

import { UserEnums } from "@foodstyles/redux/actions/User";
import { MainProfileActions } from "@foodstyles/redux/types/User";
import { LoginDataResponse } from "@foodstyles/interfaces/mainInterfaces";
import { mapLoginDataResponse } from "@foodstyles/utils/dbhelpers/dbMaps";

interface UserState {
  LoginData: LoginDataResponse;
}
const initState: UserState = {
  LoginData: mapLoginDataResponse(undefined),
};

export default (state = initState, action: MainProfileActions): UserState => {
  switch (action.type) {
    case UserEnums.SIGNIN_SUCCESS:
      return produce(state, (draft) => {
        draft.LoginData = action.payload;
      });

    default:
      return state;
  }
};
