import {
  CardsListData,
  LoginDataResponse,
} from "@foodstyles/interfaces/mainInterfaces";
import { CardsEnums } from "@foodstyles/redux/actions/Cards";
import { IAction } from "./common";

export type GetCardsAction = IAction<typeof CardsEnums.GET_CARDS, null>;
export type AddCardsAction = IAction<typeof CardsEnums.ADD_CARDS, string>;
export type DeleteCardsAction = IAction<typeof CardsEnums.DELETE_CARD, number>;
export type DupCardsAction = IAction<typeof CardsEnums.DUP_CARD, number>;
export type ShareDataAction = IAction<typeof CardsEnums.SHARE, number>;
export type ShareDataActionSuccess = IAction<
  typeof CardsEnums.SHARE_SUCCESS,
  string
>;

export type GetCardsActionSuccess = IAction<
  typeof CardsEnums.GET_CARDS_SUCCESS,
  CardsListData[]
>;

export type MainCardsActions =
  | GetCardsAction
  | GetCardsActionSuccess
  | ShareDataActionSuccess
  | ShareDataAction
  | DupCardsAction
  | DeleteCardsAction
  | AddCardsAction;
