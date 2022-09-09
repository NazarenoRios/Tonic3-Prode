import React from 'react'
import ReactPlayer from "react-player"
import './responsive-player.css'

const ResponsivePlayer = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=mCdA4bJAGGk"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default ResponsivePlayer