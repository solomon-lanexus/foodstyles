import { createAction } from "@foodstyles/redux/types/common";
import {
  AddCardsAction,
  GetCardsAction,
  GetCardsActionSuccess,
} from "@foodstyles/redux/types/Cards";
import { CardsListData } from "@foodstyles/interfaces/mainInterfaces";
export enum CardsEnums {
  GET_CARDS = "GET_CARDS",
  GET_CARDS_SUCCESS = "GET_CARDS_SUCCESS",
  ADD_CARDS = "ÄDD_CARDS",
}

export const addCards = (newcard: string): AddCardsAction =>
  createAction(CardsEnums.ADD_CARDS, newcard);

export const getCards = (): GetCardsAction =>
  createAction(CardsEnums.GET_CARDS, undefined);

export const getCardsSuccess = (
  cardDataList: CardsListData[]
): GetCardsActionSuccess =>
  createAction(CardsEnums.GET_CARDS_SUCCESS, cardDataList);
