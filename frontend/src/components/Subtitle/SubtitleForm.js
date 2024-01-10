import React, { useState } from 'react';

const SubtitleForm = ({ onSubmit }) => {
  const [timestamp, setTimestamp] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ timestamp, text });
    setTimestamp('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Timestamp:
        <input type="text" value={timestamp} onChange={(e) => setTimestamp(e.target.value)} />
      </label>
      <label>
        Subtitle:
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button type="submit">Add Subtitle</button>
    </form>
  );
};

export default SubtitleForm;
