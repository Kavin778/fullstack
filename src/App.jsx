import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Adminloginpage from './pages/Adminloginpage';
import Userloginpage from './pages/Userloginpage';
import Adminhome from './pages/Adminhome';
import Userhome from './pages/Userhome';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/admin" element={<Adminloginpage />} />
          <Route path="/user" element={<Userloginpage />} />
          <Route path="/adminhome" element={<Adminhome />} />
          <Route path="/userhome" element={<Userhome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
