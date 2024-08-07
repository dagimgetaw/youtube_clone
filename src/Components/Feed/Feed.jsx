import "./feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";

const thumbnail = [
  { name: "thumbnail1", img: thumbnail1 },
  { name: "thumbnail2", img: thumbnail2 },
  { name: "thumbnail3", img: thumbnail3 },
  { name: "thumbnail4", img: thumbnail4 },
  { name: "thumbnail5", img: thumbnail5 },
  { name: "thumbnail6", img: thumbnail6 },
  { name: "thumbnail7", img: thumbnail7 },
  { name: "thumbnail8", img: thumbnail8 },
  { name: "thumbnail1", img: thumbnail1 },
  { name: "thumbnail2", img: thumbnail2 },
  { name: "thumbnail3", img: thumbnail3 },
  { name: "thumbnail4", img: thumbnail4 },
  { name: "thumbnail5", img: thumbnail5 },
  { name: "thumbnail6", img: thumbnail6 },
  { name: "thumbnail7", img: thumbnail7 },
  { name: "thumbnail8", img: thumbnail8 },
];

const Feed = () => {
  return (
    <div className="feed">
      {thumbnail.map((th) => (
        <Card thObj={th} key={th.name} />
      ))}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Card = (props) => {
  return (
    <Link to={`/video/2/23`} className="card">
      <img src={props.thObj.img} alt={props.thObj.name} />
      <h3>Title</h3>
      <h2>Channel name</h2>
      <p>15K view &bull; 2 days ago</p>
    </Link>
  );
};

export default Feed;
