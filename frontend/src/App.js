import React, { useState } from 'react';
import './App.css'
import VideoUpload from './components/Video Player/VideoUpload';
import Contact from './components/Contact/Contact';
import SubtitleForm from './components/Subtitle/SubtitleForm';

const App = () => {
  const [videoUrl, setVideoUrl] = useState('https://res.cloudinary.com/dxotyahfw/video/upload/v1704902597/RapidQuest/ycxdzj4ytgkdvwfcwufh.mp4');
  const [subtitles, setSubtitles] = useState([]);

  const handleSubtitleSubmit = (subtitle) => {
    // Handle subtitle submission and update state
    setSubtitles([...subtitles, subtitle]);
  };

  return (
    <div className="header">
     <div className="nav-bar">
     <Contact/>
     <h1 className='title'>Video Subtitles App</h1>
     </div>
     
     <div className="video-container">
     {/* <div className="instruction"></div> */}
     <VideoUpload/>
     <SubtitleForm onSubmit={handleSubtitleSubmit} />
     </div>
      {/* <VideoPlayer videoUrl={videoUrl} subtitles={subtitles} /> */}
      {/* <input className='choose-file' type="file" onChange={(e) => setVideoUrl(URL.createObjectURL(e.target.files[0]))} /> */}
    </div>
  );
};

export default App;
