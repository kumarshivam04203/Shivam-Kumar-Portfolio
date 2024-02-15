import React from "react";
import "./style.scss";
import BgVideo from "../videos/homeVideo.mp4";

const VideoBackgroundComponent = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="video-background_source">
        <source src={BgVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackgroundComponent;
