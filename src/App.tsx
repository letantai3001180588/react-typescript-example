import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from './component/Login';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  );
}

export default App;
