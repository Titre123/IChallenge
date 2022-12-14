import React from 'react';
import SignUp from './Components/Signup/signUp';
import SignIn from './Components/Signup/signin';
import DashboardPage from "./Components/Dashboard/Dashbord"
import "./App.styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading, error] = useAuthState(auth);
  let dashboard
  if(user){
    dashboard = `/${user.uid}/dashboard`
  }
  else{
    dashboard = '/dashboard'
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<SignIn />} />
          <Route exact path={dashboard} element={<DashboardPage />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;