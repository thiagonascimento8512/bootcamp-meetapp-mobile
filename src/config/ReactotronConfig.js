import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

// CASA 192.168.0.107
// UFPA 10.210.6.217
if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.210.6.217' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
