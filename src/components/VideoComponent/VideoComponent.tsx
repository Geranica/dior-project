import { useState, useRef } from "react";
import sprite from "../../icons/sprite.svg";
import "./VideoComponent.scss";

const VideoComponent = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.controls = true;
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };
  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="video">
      <div className="video__container container">
        <div className="video__block">
          <video
            ref={videoRef}
            className="video__video"
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          >
            <source src="src/assets/Video/video-1.webm" type="video/webm" />
            <source src="src/assets/Video/video-1.mp4" type="video/mp4" />
          </video>
          <svg
            onClick={handleTogglePlay}
            className={`video__play ${
              isPlaying ? "video__play_is-playing" : ""
            }`}
          >
            <use href={`${sprite}#play_video`} />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;
