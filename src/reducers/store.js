import videoApp from './reducers.js';
import {createStore} from 'redux'

const setupStore = (initialState) => {
  return createStore(videoApp, initialState);
}





export default setupStore;