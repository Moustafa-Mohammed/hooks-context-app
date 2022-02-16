import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";

function SongList() {
  const [songs, setSongs] = useState([
    { title: "song 1", id: 1 },
    { title: "song 2", id: 2 },
    { title: "song 3", id: 3 },
  ]);

  const addSongHandler = (title) => {
    setSongs((prevSongs) => {
      return [...prevSongs, { title, id: uuid() }];
    });
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSongHandler={addSongHandler} />
    </div>
  );
}

export default SongList;
