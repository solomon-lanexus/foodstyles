import { RootState } from "@foodstyles/redux/configureStore";
import { createSelector } from "reselect";

export const selectCards = (state: RootState) => state.Cards;

export const currentCards = createSelector(selectCards, (c) => c.CardsData);
export const shareDataTransmuted = createSelector(selectCards, (s) => s.shareData);
