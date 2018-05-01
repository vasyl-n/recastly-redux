import React from 'react';
import VideoList from './VideoList.jsx';
import Search from './Search.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js'
import {connect} from 'react-redux'; 
import {updateVideos} from '../actions/actions.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   videos: exampleVideoData,
    //   currentVideo: exampleVideoData[0]
    // }
    // this.setNewVideoState = this.setNewVideoState.bind(this);
    // this.getQueryString = this.getQueryString.bind(this);
    // this.setNewCurrentVideo = this.setNewCurrentVideo.bind(this);
  }

  // getQueryString(q){
  //   searchYouTube(q, this.setNewVideoState)
  // }

  // setNewCurrentVideo(video) {
  //   console.log(video)
  //   this.setState({currentVideo: video})
  // }
  
  // setNewVideoState(videos) {
  //   this.setState({
  //     videos: videos.items,
  //     currentVideo: videos.items[0]
  //   });
  // }

  render() {
console.log(this.props)
    return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {/* <div><h5><em>search</em> <Search getQueryString={this.getQueryString} /></h5></div> */}
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentVideo} /></h5></div> */}
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> <VideoList /></h5></div>
          </div>
        </div>
      </div>
    );

  }
}



App.defaultProps = {
  videos: exampleVideoData
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

const mapStateToProps = (state) => {
  console.log(state)
  return {
    videos: state.videos,
    currentVideo: state.currentVideo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);