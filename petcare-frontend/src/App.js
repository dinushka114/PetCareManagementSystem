import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoardingAdminHome from './pages/petboarding/admin/Dashboard';
import BoardingReports from './pages/petboarding/admin/Reports';
import BoardingUpdate from './pages/petboarding/admin/UpdateBoarding';
import AddNewBoarding from './pages/petboarding/admin/AddNewBoarding';
import BoardingClient from './pages/petboarding/user/petBoardingPlaces';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route exact path='/pet-boarding' element={<BoardingAdminHome/>} />
            <Route exact path='/pet-boarding-add' element={<AddNewBoarding/>} />
            <Route exact path='/pet-boarding-report' element={<BoardingReports/>} />
            <Route exact path='/update/:id' element={<BoardingUpdate/>} />
            <Route exact path='/boarding' element={<BoardingClient/>} />
          </Routes>
        </Router>
      </>
  );
}

export default App;