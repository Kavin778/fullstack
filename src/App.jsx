import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Adminloginpage from './pages/Adminloginpage';
import Userloginpage from './pages/Userloginpage';
import Adminhome from './pages/Adminhome';
import Userhome from './pages/Userhome';
import UserApprovedList from './pages/UserAprrovedList';
import UserPendingList from './pages/UserPendingList';
import UserBookings from './pages/UserBookings';
import AdminApprove from './pages/AdminApprove';
import AdminHistory from './pages/AdminHistory';

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
          <Route path="/user-approved-list" element={<UserApprovedList/>}/>
          <Route path="/user-pending-list" element={<UserPendingList/>}/>
          <Route path="/user-bookings" element={<UserBookings/>}/>
          <Route path="/admin-approve" element={<AdminApprove/>}/>
          <Route path="/admin-history" element={<AdminHistory/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
