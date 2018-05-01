import { UPDATE_VIDEOS, UPDATE_CURRENT_VIDEO } from '../actions/actions.js';
import exampleVideoData from '../data/exampleVideoData.js';
// Log the initial state
console.log(store.getState())
 
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
 
// Dispatch some actions
store.dispatch(UPDATE_CURRENT_VIDEO(exampleVideoData[0]))
store.dispatch(UPDATE_VIDEOS(exampleVideoData))
store.dispatch(UPDATE_CURRENT_VIDEO(exampleVideoData[3]))
 
// Stop listening to state updates
unsubscribe()