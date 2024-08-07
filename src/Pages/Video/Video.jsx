import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import "./video.css";

const Video = () => {
  return (
    <div className="play-container">
      <PlayVideo />
      <Recommended />
    </div>
  );
};

export default Video;
