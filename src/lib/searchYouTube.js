import YOUR_API_KEY from '../config/youtube.js'

var searchYouTube = (options, callback) => {
  console.log(options, callback)

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
          'type': 'GET',
          'maxResults': '25',
          'part': 'snippet',
          'q': options,
          'type': '',
          'key': YOUR_API_KEY
        },
    success: (data) => {
      callback(data)
    }
  });
};



window.searchYouTube = searchYouTube;

export default searchYouTube;