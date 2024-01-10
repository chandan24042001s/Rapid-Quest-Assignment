import React, { useRef } from 'react';

const VideoPlayer = ({ videoUrl, subtitles }) => {
  const videoRef = useRef();

  return (
    <div>
      <video ref={videoRef} controls>
        <source src={videoUrl} type="video/mp4" />
        {subtitles && <track default kind="subtitles" src={subtitles} />}
      </video>
    </div>
  );
};

export default VideoPlayer;
