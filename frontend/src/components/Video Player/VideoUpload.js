import React, { useState } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';


const VideoUpload = () => {
   const [selectedFile, setSelectedFile] = useState(null);
   const [subtitleFile, setSubtitleFile] = useState(null);
   const [name, setName] = useState("");
   const [tags, setTags] = useState("");
   const [email, setEmail] = useState("");
   const [videoUrl, setVideoUrl] = useState("");

   const submitHandler = async (e) => {
       e.preventDefault();

       const formData = new FormData();
       const formData1 = new FormData();
       formData1.append('file', selectedFile);
       formData.append('videoFile', selectedFile);
       formData.append('subtitleFile', subtitleFile);
       formData.append('name', name);
       formData.append('tags', tags);
       formData.append('email', email);

       try {

        const response1 = await axios.post('http://localhost:4000/api/v1/upload/localFileUpload', formData1, {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
        });
           const response = await axios.post('http://localhost:4000/api/v1/upload/videoUpload', formData, {
               headers: {
                  'Content-Type': 'multipart/form-data'
               }
           });
       
           console.log(response1)
           setVideoUrl(response.data.videoUrl);
           console.log(response.data.videoUrl);
         
       } catch (error) {
           console.error('Error uploading video:', error);
       }
   };

   const fileChangeHandler = (event) => {
       setSelectedFile(event.target.files[0]);
   };
   const subtitleChangeHandler = (event) => {
    setSubtitleFile(event.target.files[0]);
};

   return (
       <div>
           <form onSubmit={submitHandler}>
               <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
               <input type="text" placeholder="Tags" value={tags} onChange={(e) => setTags(e.target.value)} required />
               <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
               <input type="file" accept='.mp4' onChange={fileChangeHandler} required />
               <input type="file" accept='.srt' onChange={subtitleChangeHandler} />
               <button type="submit">Upload</button>
           </form>
           {videoUrl && <VideoPlayer videoUrl={videoUrl} subtitles="" />}
       </div>
   );
};

export default VideoUpload;
