import axios from 'axios';
import './register.css'
import { useRef  } from 'react';
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";
function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();

    const navigate= useNavigate();
    const handleClick = async (e)=>{
        e.preventDefault(); 
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Password don't match!")
        }
        else{
            const user={
                username :username.current.value,
                email : email.current.value,
                password : password.current.value
            }
            try{
                 await axios.post("http://localhost:8800/api/auth/register",user);
                 navigate("/login");
            }
            catch(err){
                console.log(err);
            }
           
        }
    };



  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">
                    SocialSnipe
                </h3>
                <span className="registerDesc">
                    Connect with friends and the world around you on SocialSnipe.
                </span>
            </div>
            <div className="registerRight">
                <form className="registerBox" onSubmit={handleClick}>
                    <input placeholder="Username" className="registerInput" required ref={username} />
                    <input placeholder="Email" className="registerInput"  required ref={email} type='email'/>
                    <input placeholder="Password" className="registerInput" required ref={password} type='password' minLength="6"/>
                   
                    <input placeholder="Password Again" className="registerInput" required ref={passwordAgain} type='password'/>
                    
                    <button className="registerButton" type='submit'>
                        Sign Up
                    </button>
                    <Link className="loginRegisterButton" to={"/login"}>
                    <button className="loginRegisterButtonNew">
                        Log into Account
                    </button>
                     </Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
