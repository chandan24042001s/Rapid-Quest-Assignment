import React, { useRef } from "react";
import ReactPlayer from 'react-player';
import './video.css'

const VideoPlayer = ({ videoUrl, subtitles }) => {
  const videoRef = useRef();
  console.log(videoUrl)

  return (

    <div>
      <div className="video-card">
        <video className="Video" ref={videoRef} controls>
       {/* {videoUrl && <ReactPlayer url={videoUrl} controls />} */}
        {subtitles && <track default kind="subtitles" src={subtitles} />}
      </video>
      </div>

      
    </div>
  );
};

export default VideoPlayer;
