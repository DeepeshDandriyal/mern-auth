import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
const Header = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="bg-slate-200 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">
            <img src={logo} alt="" width={100} height={25} />
          </h1>
        </Link>
        <ul className="flex  gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/profile">
            {user.currentUser ? (
              <img
                src={user.currentUser.profilePicture}
                alt="profile"
                className="rounded-full h-8 w-8 object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
