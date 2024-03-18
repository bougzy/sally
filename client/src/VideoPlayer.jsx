import React, { useState } from 'react';

const VideoPlayer = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-80 mt-4 text-center">
      <video
        controls
        width="500"
        height="auto"
        onClick={togglePlay}
        onMouseOver={() => setIsPlaying(true)}
        onMouseOut={() => setIsPlaying(false)}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
