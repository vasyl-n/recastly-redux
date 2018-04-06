import React from 'react';
import VideoListEntry from './VideoListEntry.jsx';

const VideoList = (props) => {
  console.log(props)
    return (
    <div className="video-list">
    {
      props.videos.map((video, ind) => {
        return <div><h5><em>videoListEntry</em><VideoListEntry video={video} key={ind} /></h5></div>
      })

    }
      
    </div>
  )
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoList.propTypes = {
//   videos: React.PropTypes.array.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
export default VideoList;