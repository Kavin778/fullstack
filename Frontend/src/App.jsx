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
import PrivateRoute from './pages/PrivateRoute';
import AdminHistory from './pages/AdminHistory';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/admin" element={<Adminloginpage />} />
          <Route path="/user" element={<Userloginpage />} />

          {/*Protected Routes */}
          <Route path="/adminhome" element={<PrivateRoute><Adminhome /></PrivateRoute>} />
          <Route path="/userhome" element={<PrivateRoute><Userhome /></PrivateRoute>} />
          <Route path="/user-approved-list" element={<PrivateRoute><UserApprovedList /></PrivateRoute>} />
          <Route path="/user-pending-list" element={<PrivateRoute><UserPendingList /></PrivateRoute>} />
          <Route path="/user-bookings" element={<PrivateRoute><UserBookings /></PrivateRoute>} />
          <Route path="/admin-approve" element={<PrivateRoute><AdminApprove /></PrivateRoute>} />
          <Route path="/admin-history" element={<PrivateRoute><AdminHistory /></PrivateRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
