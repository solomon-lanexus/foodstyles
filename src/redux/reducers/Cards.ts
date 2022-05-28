import produce from "immer";

import { CardsEnums } from "@foodstyles/redux/actions/Cards";
import { MainCardsActions } from "@foodstyles/redux/types/Cards";
import { CardsListData } from "@foodstyles/interfaces/mainInterfaces";

interface CardsState {
  CardsData: CardsListData[];
  shareData: string;
}
const initState: CardsState = {
  CardsData: [
    {
      id: "",
      name: "",
    },
  ],
  shareData: "",
};

export default (state = initState, action: MainCardsActions): CardsState => {
  switch (action.type) {
    case CardsEnums.GET_CARDS_SUCCESS:
      return produce(state, (draft) => {
        draft.CardsData = action.payload;
      });
    case CardsEnums.SHARE_SUCCESS:
      return produce(state, (draft) => {
        draft.shareData = action.payload;
      });

    default:
      return state;
  }
};
