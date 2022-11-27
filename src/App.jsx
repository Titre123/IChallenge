import React from 'react';
import SignUp from './Components/Signup/signUp';
import SignIn from './Components/Signup/signin';
import "./App.styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <div></div>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<SignIn />} />
            <Route exact path='/signin' element={<SignIn />} />
            <Route exact path='/signup' element={<SignUp />} />
          </Routes>
        </Router>
      </div>
      <div></div>
    </React.Fragment>
  );
}

export default App;