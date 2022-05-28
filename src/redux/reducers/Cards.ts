import produce from "immer";

import { CardsEnums } from "@foodstyles/redux/actions/Cards";
import { MainCardsActions } from "@foodstyles/redux/types/Cards";
import { CardsListData } from "@foodstyles/interfaces/mainInterfaces";

interface CardsState {
  CardsData: CardsListData[];
}
const initState: CardsState = {
  CardsData: [
    {
      id: "",
      name: "",
    },
  ],
};

export default (state = initState, action: MainCardsActions): CardsState => {
  switch (action.type) {
    case CardsEnums.GET_CARDS_SUCCESS:
      return produce(state, (draft) => {
        draft.CardsData = action.payload;
      });

    default:
      return state;
  }
};
