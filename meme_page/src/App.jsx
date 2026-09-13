import React, { useState } from "react";
import "./index.css";

const memes = [
  "https://i.imgflip.com/1bij.jpg",
  "https://i.imgflip.com/26am.jpg",
  "https://i.imgflip.com/30b1gx.jpg",
  "https://i.imgflip.com/4t0m5.jpg",
];

const App = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [image, setImage] = useState(memes[0]);

  const generateMeme = () => {
    const random = memes[Math.floor(Math.random() * memes.length)];
    setImage(random);
  };

  return (
    <div className="container">
      <div className="meme-card">

        <h1>Meme Generator 😂</h1>

        <input
          type="text"
          placeholder="Top Text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />

        <input
          type="text"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />

        <button onClick={generateMeme}>Generate Meme</button>

        <div className="meme">
          <img src={image} alt="meme" />
          <h2 className="top">{topText}</h2>
          <h2 className="bottom">{bottomText}</h2>
        </div>

      </div>
    </div>
  );
};

export default App;