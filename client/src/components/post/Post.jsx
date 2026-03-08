import { MoreVert } from '@mui/icons-material';
import './post.css';
import { useState ,useEffect, useContext} from 'react';
import axios from 'axios';
// import {format} from 'timeago.js';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
function Post({post}) {
    const [like,setLike] = useState(post.likes.length);
    const [isLiked,setIsLiked] = useState(false)
    const [user,setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentUser} = useContext(AuthContext);

    function timeAgo(inputTime) {
        const currentTime = new Date();
        const parsedInputTime = new Date(inputTime);
        const timeDiff = currentTime - parsedInputTime;
        
        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);
        
        if (seconds < 60) {
          return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
        } else if (minutes < 60) {
          return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        } else if (hours < 24) {
          return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        } else if (days < 7) {
          return `${days} day${days !== 1 ? 's' : ''} ago`;
        } else if (weeks < 4) {
          return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
        } else if (months < 12) {
          return `${months} month${months !== 1 ? 's' : ''} ago`;
        } else {
          return `${years} year${years !== 1 ? 's' : ''} ago`;
        }
      }

    useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id,post.likes])

    useEffect(()=>{
        const fetchUser = async()=>{
          const res = await axios.get(`http://localhost:8800/api/users?userId=${post.userId}`)
          setUser(res.data)
        }
        fetchUser();
      },[post.userId])

    const likeHandler=()=>{
        try{
            axios.put("http://localhost:8800/api/posts/"+post._id + "/like",{userId:currentUser._id});
        }
        catch(err){

        }
        setLike(isLiked?like-1:like+1)
        setIsLiked(!isLiked)
    }
  return ( 
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to= { `/profile/${user.username}`}>
                    <img src=  {user.profilePicture ?PF+user.profilePicture : PF+"person/noAvatar.jpg"}alt="profile_image" className="postProfileImg" />
                    </Link>
                    
                    <span className="postUsername">
                        {user.username}
                    </span>
                    <span className="postDate">
                        {timeAgo(post.createdAt)}
                    </span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc} </span>
                <img src={PF+post.img} alt="post_image" className="postImg" />
                {console.log()}
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src={`${PF}like.png`} alt="likeIcon" className="likeIcon" onClick={likeHandler} />
                    <img src={`${PF}heart.png`}alt="heartIcon" className="likeIcon" onClick={likeHandler} />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">
                        {post.comment}   comments
                    </span>
                </div>
            </div>   
        </div>    
    </div>
  )
}

export default Post
