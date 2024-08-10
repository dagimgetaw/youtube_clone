import "./playvideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import moment from "moment";
import { useEffect, useState } from "react";
import { API_KEY, value_convertor } from "../../data";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PlayVideo = ({ videoId }) => {
  // const { videoId } = useParams;
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    // fetch video data
    const videoDetail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetail_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchChannelData = async () => {
    // fetch channel data
    const channelDetail_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelDetail_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    // fetch comment inside video
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchChannelData();
  }, [apiData]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h3>{apiData ? apiData.snippet.title : "Error fetching data"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_convertor(apiData.statistics.viewCount) : "error"}{" "}
          views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "error"}
        </p>
        <div>
          <span>
            <img src={like} alt="like" />
            {apiData ? value_convertor(apiData.statistics.likeCount) : "error"}
          </span>
          <span>
            <img src={dislike} alt="dislike" />
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
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt="jack"
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "error"}</p>
          <span>
            {channelData
              ? value_convertor(channelData.statistics.subscriberCount)
              : "error"}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Error fetching data"}
        </p>
        <hr />
        <h4>
          {apiData ? value_convertor(apiData.statistics.commentCount) : "error"}{" "}
          Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div className="comment" key={index}>
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt="user_profile"
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>
                    {moment(
                      item.snippet.topLevelComment.snippet.updatedAt
                    ).fromNow()}{" "}
                  </span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="like" />
                  <span>
                    {value_convertor(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={dislike} alt="dislike" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
