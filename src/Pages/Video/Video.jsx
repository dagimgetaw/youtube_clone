import { useParams } from "react-router-dom";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import "./video.css";
import Get from "../../Components/Feed/Get";

// eslint-disable-next-line react/prop-types
const Video = () => {
  const { videoId, categoryId } = useParams(null);

  return (
    <div className="play-container">
      <PlayVideo videoId={videoId} />
      <Recommended />
      {/* <Get /> */}
    </div>
  );
};

export default Video;
