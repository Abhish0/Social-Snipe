import React, { useContext } from 'react'; // Make sure to import React
import Home from "./pages/home/Home";
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { AuthContext } from './context/AuthContext';

function App() {
  const {user} = useContext(AuthContext);
  return (
   <Router>
    <Routes>
      <Route path="/" element={ user?<Home/>:<Register/>}>
      </Route>
      <Route path="/login" element={ 
      user?<Navigate to="/"/>:<Login/>}>
      </Route>
      <Route path="/register" element={ 
      user?<Navigate to="/"/>:<Register/>}>
      </Route>
      <Route path="/profile/:username" element={ <Profile/>}>
      </Route>
    </Routes>
   </Router>
  );
}

export default App;
