import React, { useRef } from "react";
import './video.css'

const VideoPlayer = ({ videoUrl, subtitles }) => {
  const videoRef = useRef();

  return (
    <div>
      <div class="card">
        <div class="bg">
        <video className="Video" ref={videoRef} controls>
        <source src={videoUrl} type="video/mp4" />
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
