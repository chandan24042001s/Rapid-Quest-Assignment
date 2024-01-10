import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'
function App() {
  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = event => {
      setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = async event => {
      event.preventDefault();

      const formData = new FormData();
      formData.append('videoFile', selectedFile);

      try {
          const response = await axios.post("http://localhost:4000/api/v1/upload/videoUpload", formData, {
              headers: {
                 'Content-Type': 'multipart/form-data'
              }
          });

          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
  };

  return (
     <div className='App'>
       <form onSubmit={handleSubmit}>
          <input type="file"  onChange={handleFileChange} />
          <button type="submit">Upload</button>
      </form>
     </div>
  );
}

export default App;



// function VideoUpload() {
  //  const [selectedFile, setSelectedFile] = useState();

  //  const handleFileChange = event => {
  //      setSelectedFile(event.target.files[0]);
  //  };

  //  const handleSubmit = async event => {
  //      event.preventDefault();

  //      const formData = new FormData();
  //      formData.append('videoFile', selectedFile);

  //      try {
  //          const response = await axios.post('/api/videoUpload', formData, {
  //              headers: {
  //                 'Content-Type': 'multipart/form-data'
  //              }
  //          });

  //          console.log(response.data);
  //      } catch (error) {
  //          console.error(error);
  //      }
  //  };

  //  return (
  //      <form onSubmit={handleSubmit}>
  //          <input type="file" accept="video/*" onChange={handleFileChange} />
  //          <button type="submit">Upload</button>
  //      </form>
  //  );
// }

// export default VideoUpload;