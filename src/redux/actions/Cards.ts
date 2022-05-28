import { createAction } from "@foodstyles/redux/types/common";
import {
  AddCardsAction,
  DeleteCardsAction,
  DupCardsAction,
  GetCardsAction,
  GetCardsActionSuccess,
  ShareDataAction,
  ShareDataActionSuccess,
} from "@foodstyles/redux/types/Cards";
import { CardsListData } from "@foodstyles/interfaces/mainInterfaces";
export enum CardsEnums {
  GET_CARDS = "GET_CARDS",
  GET_CARDS_SUCCESS = "GET_CARDS_SUCCESS",
  ADD_CARDS = "ÄDD_CARDS",
  DELETE_CARD = "DELETE_CARD",
  DUP_CARD = "DUP_CARD",
  SHARE = "SHARE",
  SHARE_SUCCESS = "SHARE_SUCCESS",
}

export const addCards = (newcard: string): AddCardsAction =>
  createAction(CardsEnums.ADD_CARDS, newcard);

export const deleteCard = (id: number): DeleteCardsAction =>
  createAction(CardsEnums.DELETE_CARD, id);

export const dupCard = (id: number): DupCardsAction =>
  createAction(CardsEnums.DUP_CARD, id);

export const getCards = (): GetCardsAction =>
  createAction(CardsEnums.GET_CARDS, undefined);

export const getCardsSuccess = (
  cardDataList: CardsListData[]
): GetCardsActionSuccess =>
  createAction(CardsEnums.GET_CARDS_SUCCESS, cardDataList);

export const shareData = (id: number): ShareDataAction =>
  createAction(CardsEnums.SHARE, id);

export const shareDataSuccess = (data: string): ShareDataActionSuccess =>
  createAction(CardsEnums.SHARE_SUCCESS, data);
