import React, { useState } from "react";
import "./subtitle.css";

const SubtitleForm = ({ onSubmit }) => {
  const [timestamp, setTimestamp] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ timestamp, text });
    setTimestamp("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="checkbox">
        <input type="text" placeholder="Enter your name" id="" />
        <input type="text" placeholder="Enter your Email" />
        <input type="text" placeholder="Relation Status" />
      </div>
      <div>
        <label>
          Timestamp:
          <input
            type="text"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
          />
        </label>
        <label>
          Subtitle:
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <button type="submit">Add Subtitle</button>
      </div>
    </form>
  );
};

export default SubtitleForm;
