import { createAction } from "@foodstyles/redux/types/common";
import {
  GetCardsAction,
  GetCardsActionSuccess,
} from "@foodstyles/redux/types/Cards";
import { CardsListData } from "@foodstyles/interfaces/mainInterfaces";
export enum CardsEnums {
  GET_CARDS = "GET_CARDS",
  GET_CARDS_SUCCESS = "GET_CARDS_SUCCESS",
}

export const getCards = (): GetCardsAction =>
  createAction(CardsEnums.GET_CARDS, undefined);
export const getCardsSuccess = (
  cardDataList: CardsListData[]
): GetCardsActionSuccess =>
  createAction(CardsEnums.GET_CARDS_SUCCESS, cardDataList);
