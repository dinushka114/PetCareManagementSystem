import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/boarding/admin/Dashboard';
import Reports from './pages/boarding/admin/Reports';
import Update from './pages/boarding/admin/UpdateBoarding';
import AddNewBoarding from './pages/boarding/admin/AddNewBoarding';
import Client from './pages/boarding/user/petBoardingPlaces';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route exact path='/' element={<Dashboard/>} />
            <Route exact path='/add' element={<AddNewBoarding/>} />
            <Route exact path='/report' element={<Reports/>} />
            <Route exact path='/update' element={<Update/>} />
            <Route exact path='/client' element={<Client/>} />
          </Routes>
        </Router>
      </>
  );
}

export default App;