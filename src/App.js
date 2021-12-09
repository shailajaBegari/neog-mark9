import React from "react";
import "./styles.css";
import { useState } from "react";

const singers = {
  Southsingers: [
    { name: "Sidsriram", rating: "5/5" },
    { name: "SP.Balasubramanayam", rating: "5/5" }
  ],

  Northsingers: [
    {
      name: "Shreyagoshal",
      rating: "5/5"
    },
    {
      name: "AR Rehaman",
      rating: "5/5"
    }
  ],
  Tollywood: [
    {
      name: "Malavika",
      rating: "4/5"
    },
    {
      name: "Ramyabehara",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Tollywood");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🧑‍🎤 BEST MUSIC SINGERS IN INDIA 🧑‍🎤</h1>
      <p style={{ fontSize: "larger" }}>
        {" "}
        A person who sings is called a singer or vocalist (in jazz and popular
        music). Singers perform music (arias, recitatives, songs, etc.) that can
        be sung with or without accompaniment by musical instruments.{" "}
      </p>

      <div>
        {Object.keys(singers).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "2px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {singers[selectedGenre].map((Sing) => (
            <li
              key={Sing.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid black",
                width: "80%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {Sing.name} </div>
              <div style={{ fontSize: "smaller" }}> {Sing.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
