import "./topbar.css";
import React from "react";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { useContext } from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
function Topbar() {
  const {user} = useContext(AuthContext);
  const {logout} = useContext(AuthContext);
  const handleLogout = () => {
    logout(); // Call the logout function from the context
  };
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">SocialSnipe</span>
          </Link>
         
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <div className="searchIcon">
            <Search />
            </div>
            
            <input
              placeholder="Search for friend, post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">2</span>
            </div>
          </div>
          <Link to={`/profile/${user.username}`}>
          <img src={ user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.jpg"} alt="" className="topbarImg" />
          </Link>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
