import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";
import IndexPage from './pages/Index.js';
import Sidebar from './components/Sidebar.js';
import Main from "./components/Main.js";
import Auth from './components/login.js';
import DeviceRegistration from './components/DeviceRegistrationComponenet.js';
import Journal from "./components/Journal.js";
import MustSignIn from './components/MustSignIn.js';



function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Auth user={user} setUser={setUser}/>
        <Sidebar user={user} setUser={setUser}/>
        <Journal user={user}/>
        <Routes>
          <Route path="/" element={<IndexPage/>}></Route>
          <Route path="/fitbit" element={<Main user={user}/>}></Route>
          <Route path="/register-device" element={<DeviceRegistration/>}></Route>
          <Route path="/must-register" element={<MustSignIn/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
 