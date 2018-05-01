export const UPDATE_CURRENT_VIDEO = 'UPDATE_CURRENT_VIDEO';
export const UPDATE_VIDEOS = 'UPDATE_VIDEOS';
export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';


export function updateCurrentVideo(video) {
  return { type: UPDATE_CURRENT_VIDEO, video }
}
 
export function updateVideos(videos) {
  return { type: UPDATE_VIDEOS, videos }
}

export function updateSearchQuery(text) {
  return { type: UPDATE_SEARCH_QUERY, text }
}