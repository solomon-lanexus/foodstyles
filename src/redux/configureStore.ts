import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../../reactotron-config';
import {watcherSaga} from './sagas/rootSaga';
import User from '@foodstyles/redux/reducers/User';
import Cards from '@foodstyles/redux/reducers/Cards';
const reducers = combineReducers({
  User: User,
  Cards: Cards
});

export type RootState = ReturnType<typeof reducers>;
const sagaMonitor = (Reactotron as any).createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middleware = [sagaMiddleware];

const store = createStore(
  reducers,
  compose(applyMiddleware(...middleware), (Reactotron as any).createEnhancer()),
);

sagaMiddleware.run(watcherSaga);

export default store;
