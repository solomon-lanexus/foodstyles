import Reactotron, {openInEditor} from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'FOODSTYLES',
  })
  .useReactNative({
    asyncStorage: {
      ignore: ['secret'],
    },
  })
  .use(openInEditor())
  .use(reduxPlugin())
  .use(sagaPlugin())
  .connect();

console.disableYellowBox = true;
console.tron = reactotron;

export default reactotron;
