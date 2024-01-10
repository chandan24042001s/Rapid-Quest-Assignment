import React, { useState } from 'react';
import VideoPlayer from './components/Video Player/VideoPlayer';
import SubtitleForm from './components/Subtitle/SubtitleForm';
import './App.css'

const App = () => {
  const [videoUrl, setVideoUrl] = useState('https://res.cloudinary.com/dxotyahfw/video/upload/v1704902597/RapidQuest/ycxdzj4ytgkdvwfcwufh.mp4');
  const [subtitles, setSubtitles] = useState([]);

  const handleSubtitleSubmit = (subtitle) => {
    // Handle subtitle submission and update state
    setSubtitles([...subtitles, subtitle]);
  };

  return (
    <div>
      <h1 className='title'>Video Subtitles App</h1>
      <div className='video-container'>
      <VideoPlayer videoUrl={videoUrl} subtitles={subtitles} />
      </div>
      <div className='Submit-from'>
      <SubtitleForm onSubmit={handleSubtitleSubmit} />
      </div>
      <input className='choose-file' type="file" onChange={(e) => setVideoUrl(URL.createObjectURL(e.target.files[0]))} />
    </div>
  );
};

export default App;
