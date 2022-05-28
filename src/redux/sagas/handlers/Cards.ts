import { all, put, call, takeLatest } from "redux-saga/effects";
import LoggingService from "@foodstyles/utils/logging/LoggingService";

import { mapLoginDataResponse } from "@foodstyles/utils/dbhelpers/dbMaps";

import {
  CardsEnums,
  getCards,
  getCardsSuccess,
} from "@foodstyles/redux/actions/Cards";

import { GetCardsAction, GetCardsActionSuccess } from "@foodstyles/redux/types/Cards";
import { CardsListData } from "@foodstyles/interfaces/mainInterfaces";

const logError = (error: any) => {
  LoggingService.error(`CARDS HANDLER ERROR: ${error.message}`);
  LoggingService.error("Stack: ", error.stack);
};

function* requestGetCards(action: GetCardsAction) {
  try {
    const cardDataResp: CardsListData[] = yield call(getCards);
    yield put(getCardsSuccess(cardDataResp));
  } catch (error) {
    logError("error");
  }
}

export default all([takeLatest(CardsEnums.GET_CARDS, requestGetCards)]);
