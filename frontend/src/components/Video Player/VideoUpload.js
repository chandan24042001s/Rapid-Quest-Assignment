import React, { useState } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';
import "./video.css"

const VideoUpload = () => {
   const [selectedFile, setSelectedFile] = useState();
   const [name, setName] = useState("");
   const [tags, setTags] = useState("");
   const [email, setEmail] = useState("");
   const [videoUrl,setVideoUrl]=useState("")
   const submitHandler = async (e) => {
       e.preventDefault();

       const formData = new FormData();
       formData.append('videoFile', selectedFile);
       formData.append('name', name);
       formData.append('tags', tags);
       formData.append('email', email);

       try {
           const response = await axios.post('https://ecommerce-chandan-778n.onrender.com/api/v1/upload/videoUpload', formData, {
               headers: {
                  'Content-Type': 'multipart/form-data'
               }
           });
           setVideoUrl(response.data.videoUrl);
           console.log(videoUrl)
           console.log(response.data.videoUrl);
       } catch (error) {
           console.error(error);
       }
   };

   const fileChangeHandler = (event) => {
       setSelectedFile(event.target.files[0]);
   };

   return (
       <div>
           <form className='input-form' onSubmit={submitHandler}>
           {videoUrl && <VideoPlayer videoUrl={videoUrl} subtitles="" />}
               <input className='input' type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
               <input className='input' type="text" placeholder="Tags" value={tags} onChange={(e) => setTags(e.target.value)} required />
               <input className='input' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
               <div className='file-container'>
               <input className='choose-file' type="file" onChange={fileChangeHandler} required />
               <button className="button" type='submit'>Upload</button>
               </div>
           </form>
       </div>
   );
};

export default VideoUpload;