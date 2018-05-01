import exampleVideoData from '../data/exampleVideoData.js';
import { UPDATE_CURRENT_VIDEO, UPDATE_VIDEOS, UPDATE_SEARCH_QUERY } from '../actions/actions.js';
import { combineReducers } from 'redux';

const initialState = {
  videos: exampleVideoData,
  currentVideo: exampleVideoData[3],
  currentSearchQuery: ''
}

const video = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_VIDEO:
      return Object.assign({}, state, {
        currentVideo : action.video
      })

    case UPDATE_VIDEOS:
      return Object.assign({}, state, {
        videos : action.videos
      })

    case UPDATE_SEARCH_QUERY:
      return Object.assign({}, state, {
        currentSearchQuery: action.currentSearchQuery
      })
    default:
      return state;
  }
}

const videoApp = combineReducers({
  video
})


export default videoApp;