import axios from "axios";
export const loginCall = async(userCredential,dispatch)=>{
    dispatch({type:"LOGIN_START"});
    try{
        const res = await axios.post("http://localhost:8800/api/auth/login" , userCredential);
        dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    }
    catch(err){
        dispatch({type:"LOGIN_FAILURE",payload:err});
    }
};
// import axios from "axios";
// import { LoginSuccess ,LoginFailure } from "./context/AuthActions"; // Import your action creators for LOGIN_SUCCESS and LOGIN_FAILURE

// export const loginCall = async (userCredential, dispatch) => {
//     dispatch({ type: "LOGIN_START" });
//     try {
//         const res = await axios.post("http://localhost:8800/api/auth/login", userCredential);

//         if (res.data.success) {
//             // Dispatch LOGIN_SUCCESS with the user data
//             dispatch(LoginSuccess(res.data.user));
//         } else {
//             // Dispatch LOGIN_FAILURE with the error message
//             dispatch(LoginFailure(res.data.message));
//         }
//     } catch (err) {
//         // Dispatch LOGIN_FAILURE with the error
//         dispatch(LoginFailure(err));
//     }
// };
