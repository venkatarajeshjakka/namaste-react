import { useContext } from "react";
import UserContext from "../utils/context/UserContext";
import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
const Header = () => {
  const onlineStatus = useOnlineStatus();

  const userData = useContext(UserContext);

  console.log(userData);
  return (
    <header className="flex items-center justify-between shadow-lg mb-2">
      <img className="w-16" src={LOGO_URL} />

      <nav className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="px-4">
            <NavLink to="about">About Us</NavLink>
          </li>
          <li className="px-4">
            <NavLink to="contact"> Contact Us</NavLink>
          </li>
          <li className="px-4">
            <NavLink to="grocery"> Grocery</NavLink>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4 text-blue-800 font-bold">
            Welcome, {userData.loggedInUser}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
