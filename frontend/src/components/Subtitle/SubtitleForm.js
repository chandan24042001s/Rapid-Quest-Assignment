import React, { useState } from "react";
import "./subtitle.css";



const SubtitleForm = ({ onSubtitleSubmit, onConvertToSrt }) => {
  const [timestamp, setTimestamp] = useState("");
  const [text, setText] = useState("");
  const [subtitles, setSubtitles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubtitle = { timestamp, text };
    setSubtitles([...subtitles, newSubtitle]);
    onSubtitleSubmit(newSubtitle);
    setTimestamp("");
    setText("");
  };

  const handleConvertToSrt = () => {
    // Convert subtitles to .srt format
    const srtContent = subtitles
      .map((subtitle, index) => {
        const startTime = formatTime(subtitle.timestamp);
        const endTime = formatTime(subtitles[index + 1]?.timestamp) || "00:00:00,000";
        return `${index + 1}\n${startTime} --> ${endTime}\n${subtitle.text}\n\n`;
      })
      .join("");

    // Create a Blob with the content and trigger a download
    const blob = new Blob([srtContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'subtitles.srt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Clear subtitles after conversion
    setSubtitles([]);
  };

  const formatTime = (timestamp) => {
    // Convert timestamp to HH:MM:SS,SSS format
    // Assuming the input timestamp is in seconds
    const hours = Math.floor(timestamp / 3600);
    const minutes = Math.floor((timestamp % 3600) / 60);
    const seconds = Math.floor(timestamp % 60);
    const milliseconds = Math.floor((timestamp % 1) * 1000);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')},${String(milliseconds).padStart(3, '0')}`;
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
            <p>Timestamp:</p>

             <input
              className="timer"
              type="text"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
            /> 
            <p>Subtitle:</p>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
          <button className="add-button"  onClick={handleConvertToSrt}>Convert to .srt</button>
          <button className="add-button" id="download" type="submit">Download</button>
      </form>
    </div>
  );
};

export default SubtitleForm;
