import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Slidebar = () => {
  // using that reducer

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return
  if (!isMenuOpen) return null;

  // or ternary operator

  return (
    <div className="p-5 shadow-lg w-48">
      <div className="pb-4">
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="demo">Demo</Link>
          </li>

          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Sport</li>
        <li>Films</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Shopping</li>
      </ul>
      <h1 className="font-bold pt-4">Watch later</h1>
      <ul>
        <li>Sport</li>
        <li>Films</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Shopping</li>
      </ul>
    </div>
  );
};

export default Slidebar;
