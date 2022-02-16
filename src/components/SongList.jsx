import React, { useState } from "react";
import { v1 as uuid } from "uuid";

function SongList() {
  const [songs, setSongs] = useState([
    { title: "song 1", id: 1 },
    { title: "song 2", id: 2 },
    { title: "song 3", id: 3 },
  ]);

  const addSongHandler = () => {
    setSongs((prevSongs) => {
      return [...prevSongs, { title: "New Song", id: uuid() }];
    });
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <button onClick={addSongHandler}>Add song</button>
    </div>
  );
}

export default SongList;
