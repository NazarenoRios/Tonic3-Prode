import React from 'react'
import ReactPlayer from "react-player"
import './responsive-player.css'

const ResponsivePlayer = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=vknnmKgck7o&ab_channel=PedroBauso"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default ResponsivePlayer