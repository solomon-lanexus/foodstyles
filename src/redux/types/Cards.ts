import {
  CardsListData,
  LoginDataResponse,
} from "@foodstyles/interfaces/mainInterfaces";
import { CardsEnums } from "@foodstyles/redux/actions/Cards";
import { IAction } from "./common";

export type GetCardsAction = IAction<typeof CardsEnums.GET_CARDS, null>;

export type GetCardsActionSuccess = IAction<
  typeof CardsEnums.GET_CARDS_SUCCESS,
  CardsListData[]
>;

export type MainCardsActions = GetCardsAction | GetCardsActionSuccess;
