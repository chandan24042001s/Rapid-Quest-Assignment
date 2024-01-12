import React, { useRef } from "react";
import ReactPlayer from 'react-player';
import './video.css'

const VideoPlayer = ({ videoUrl, subtitles }) => {
  const videoRef = useRef();
  console.log(videoUrl)

  return (
    <>
    <div>
     <video className="Video" ref={videoRef} controls autoPlay >
        {videoUrl && <source src={videoUrl} type="video/mp4" />}
        {subtitles && <track default kind="subtitles" src={subtitles} />}
      </video>
    </div>
    </>
  );
};

export default VideoPlayer;
