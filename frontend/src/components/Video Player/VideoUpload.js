import React, { useState } from 'react';
import axios from 'axios';

const VideoUpload = () => {
   const [selectedFile, setSelectedFile] = useState();
   const [name, setName] = useState("");
   const [tags, setTags] = useState("");
   const [email, setEmail] = useState("");

   const submitHandler = async (e) => {
       e.preventDefault();

       const formData = new FormData();
       formData.append('videoFile', selectedFile);
       formData.append('name', name);
       formData.append('tags', tags);
       formData.append('email', email);

       try {
           const response = await axios.post('http://localhost:4000/api/v1/upload/videoUpload', formData, {
               headers: {
                  'Content-Type': 'multipart/form-data'
               }
           });
           console.log(response.data);
       } catch (error) {
           console.error(error);
       }
   };

   const fileChangeHandler = (event) => {
       setSelectedFile(event.target.files[0]);
   };

   return (
       <div>
           <form onSubmit={submitHandler}>
               <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
               <input type="text" placeholder="Tags" value={tags} onChange={(e) => setTags(e.target.value)} required />
               <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
               <input type="file" onChange={fileChangeHandler} required />
               <button type="submit">Upload</button>
           </form>
       </div>
   );
};

export default VideoUpload;