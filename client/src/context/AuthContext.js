// import { createContext, useReducer } from "react";
// import AuthReducer from "./AuthReducer";
// const INITIAL_STATE = {
//     user:
//     {_id:"64c4d1d88fb7d1764be5767f",
//     username:"abhi",
//     email:"abhi@gmail.com",
//     profilePicture:"person/2.jpeg",coverPicture:"",
//     followers:[],
//     following:[],
//     },
//     isFetching:false,
//     error:false
// };
// export const AuthContext = createContext(INITIAL_STATE);
// export const AuthContextProvider = ({children})=>{
//     const [state, dispatch] = useReducer(AuthReducer,INITIAL_STATE);
//     return(
//         <AuthContext.Provider value={{user:state.user,isFetching:state.isFetching,error:state.error , dispatch}}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])
  
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user"); // Remove user data from localStorage
  };
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        logout,//Adding the logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};