import "./feed.css";
import { API_KEY, value_convertor } from "../../data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

// eslint-disable-next-line react/prop-types
const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <Link
              to={`/video/${item.snippet.categoryId}/${item.id}`}
              className="card"
            >
              <img src={item.snippet.thumbnails.medium.url} alt="thumbnail1" />
              <h3>{item.snippet.title}</h3>
              <h2>{item.snippet.channelTitle}</h2>
              <p>
                {value_convertor(item.statistics.viewCount)} view &bull;{" "}
                {moment(item.snippet.publishedAt).fromNow()}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
