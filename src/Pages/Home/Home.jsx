import "./home.css";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import Feed from "../../Components/Feed/Feed.jsx";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
