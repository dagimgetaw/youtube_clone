import "./playvideo.css";
// import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { useEffect, useState } from "react";
import { API_KEY } from "../../data";

// eslint-disable-next-line react/prop-types
const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);

  const fetchVideoData = async () => {
    const videoDetail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetail_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h3>{apiData ? apiData.snippet.title : `Title here ${videoId}`}</h3>
      <div className="play-video-info">
        <p>2321 views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="like" />
            231
          </span>
          <span>
            <img src={dislike} alt="dislike" />4
          </span>
          <span>
            <img src={share} alt="share" />
            Share
          </span>
          <span>
            <img src={save} alt="save" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="jack" />
        <div>
          <p>Dagim</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe Dagim to watch more tech tutorials</p>
        <hr />
        <h4>231 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="user_profile" />
          <div>
            <h3>
              Jack Jack <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>12</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="user_profile" />
          <div>
            <h3>
              Jack Jack <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>12</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="user_profile" />
          <div>
            <h3>
              Jack Jack <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>12</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="user_profile" />
          <div>
            <h3>
              Jack Jack <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>12</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
