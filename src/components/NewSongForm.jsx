import React, { useState } from "react";

function NewSongForm({ addSongHandler }) {
  const [inputText, setInputText] = useState("");
  const submitSongHandler = (e) => {
    e.preventDefault();
    addSongHandler(inputText);
    setInputText("");
  };
  return (
    <div>
      <form onSubmit={submitSongHandler}>
        <label>add song: </label>
        <input
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <input type="submit" value="add song" />
      </form>
    </div>
  );
}

export default NewSongForm;
