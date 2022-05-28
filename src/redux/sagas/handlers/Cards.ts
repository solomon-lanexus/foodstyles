import { all, put, call, takeLatest } from "redux-saga/effects";
import LoggingService from "@foodstyles/utils/logging/LoggingService";

import { mapLoginDataResponse } from "@foodstyles/utils/dbhelpers/dbMaps";

import {
  CardsEnums,
  getCards,
  getCardsSuccess,
} from "@foodstyles/redux/actions/Cards";

import {
  AddCardsAction,
  GetCardsAction,
  GetCardsActionSuccess,
} from "@foodstyles/redux/types/Cards";
import { CardsListData } from "@foodstyles/interfaces/mainInterfaces";
import { GraphQLAddCards, GraphQLGetCards } from "../graphQL/Cards";

const logError = (error: any) => {
  LoggingService.error(`CARDS HANDLER ERROR: ${error.message}`);
  LoggingService.error("Stack: ", error.stack);
};

function* requestGetCards(action: GetCardsAction) {
  try {
    const RESP: any = JSON.parse(yield call(GraphQLGetCards));
    const cardDataResp: CardsListData[] = RESP.data.cards;
    yield put(getCardsSuccess(cardDataResp));
  } catch (error) {
    logError("error");
  }
}

function* addCardsCards(action: AddCardsAction) {
  try {
    yield call(GraphQLAddCards, action.payload);
    const RESP: any = JSON.parse(yield call(GraphQLGetCards));
    const cardDataResp: CardsListData[] = RESP.data.cards;
    yield put(getCardsSuccess(cardDataResp));
  } catch (error) {
    logError("error");
  }
}

export default all([
  takeLatest(CardsEnums.GET_CARDS, requestGetCards),
  takeLatest(CardsEnums.ADD_CARDS, addCardsCards),
]);
