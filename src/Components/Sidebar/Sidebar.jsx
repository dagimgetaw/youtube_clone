import "./sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const side = [
  { name: "Home", img: home },
  { name: "Gaming", img: game_icon },
  { name: "Automobiles", img: automobiles },
  { name: "Sports", img: sports },
  { name: "Entertainment", img: entertainment },
  { name: "Technology", img: tech },
  { name: "Music", img: music },
  { name: "Blogs", img: blogs },
  { name: "News", img: news },
];

const sub = [
  { name: "PewDiePie", img: jack },
  { name: "MrBeast", img: simon },
  { name: "Justine Bieber", img: tom },
  { name: "5-minute Crafts", img: megan },
  { name: "Nas Daily", img: cameron },
];

// eslint-disable-next-line react/prop-types
const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        {side.map((side) => (
          <SideContent sideObj={side} key={side.name} />
        ))}
        {/* <div className="side-link">
          <img src={home} alt="home" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={game_icon} alt="home" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={automobiles} alt="home" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={sports} alt="home" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={entertainment} alt="home" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={tech} alt="home" />
          <p>Technology</p>
        </div>
        <div className="side-link">
          <img src={music} alt="home" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={blogs} alt="home" />
          <p>Blogs</p>
        </div>
        <div className="side-link">
          <img src={news} alt="home" />
          <p>News</p>
        </div> */}
        <hr />
      </div>
      <div className="subscribed-lists">
        <h3>Subscribed</h3>
        {sub.map((sub) => (
          <SideContent sideObj={sub} key={side.sub} />
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const SideContent = (props) => {
  return (
    <>
      <div className="side-link">
        <img src={props.sideObj.img} alt={props.sideObj.name} />
        <p>{props.sideObj.name}</p>
      </div>
    </>
  );
};

export default Sidebar;
