import { useContext, useRef } from 'react';
import './login.css';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
function Login() {
    const email = useRef();
    const password = useRef();

    //changed const {user,isFetching ,error, dispatch} =useContext(AuthContext);
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e)=>{
        e.preventDefault();
        try{
           loginCall({email:email.current.value,password:password.current.value},dispatch);
        }
        catch(error){
            console.log(error);
        }
       
    };
    // console.log(user);
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">
                    SocialSnipe
                </h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on SocialSnipe.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Email" type ="email" required className="loginInput" ref={email}/>
                    <input placeholder="Password" type="password" 
                    required 
                    minLength="6" className="loginInput" ref={password} />
                    
                    <button className="loginButton" type='submit' disabled={isFetching}>
                        {isFetching ? <CircularProgress/>: "Log In"}
                        
                    </button>
                    <span className="loginForgot">Forgot Password?</span>
                    
                       <Link to={"/register"} className="loginRegisterButton">
                       <button className="loginRegisterButtonNew">
                       {isFetching ? <CircularProgress/>: "Create a new account"}
                        </button>
                        </Link>
                   
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
