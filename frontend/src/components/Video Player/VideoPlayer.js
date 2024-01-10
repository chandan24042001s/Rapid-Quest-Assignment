import React, { useRef } from "react";
import './video.css'

const VideoPlayer = ({ videoUrl, subtitles }) => {
  const videoRef = useRef();
  console.log(videoUrl)
  return (

    <div>
      <div className="card">
        <div className="bg">
        <video className="Video" ref={videoRef} controls>
        {videoUrl && <source src={videoUrl} type="video/mp4" />}
        {subtitles && <track default kind="subtitles" src={subtitles} />}
      </video>
        </div>
        <div class="blob">
    
        </div>
      </div>

      
    </div>
  );
};

export default VideoPlayer;
