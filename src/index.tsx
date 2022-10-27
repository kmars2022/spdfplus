import React from 'react';
import ReactDOM from 'react-dom/client';
import '@uswds/uswds/dist/css/uswds.min.css';
import '@uswds/uswds/dist/js/uswds';
import '@uswds/uswds/dist/js/uswds-init';
import HeaderA from './components/header/HeaderA';
import FooterA from './components/footer/FooterA';
import { Link, BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Staff from './pages/Staff';
// import heroImg from './images/Helio_Teams_Background_5_SPDF_Crop_Wider.jpg'
import Acknowledgements from './pages/Acknowledgements';
import Statistics from './pages/Statistics';
import HistoryP from './pages/History';
import SubmittingData from './pages/submittingData';
import NewData from './pages/newData';
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
    <HeaderA></HeaderA>
     
      
      <main id="main-content">
        <Routes>
        
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/About" element={<About/>}>
            </Route>
          <Route path="/Staff" element={<Staff/>}>
          </Route>
          <Route path="/History" element={<HistoryP/>}>
          </Route>
          <Route path="/Statistics" element={<Statistics/>}>
          </Route>
          <Route path="/Acknowledgements" element={<Acknowledgements/>}>
          </Route>
          <Route path="/SubmittingData" element={<SubmittingData/>}>
          </Route>
          <Route path="/NewData" element={<NewData/>}>
          </Route>
        </Routes>
      </main>

      
    <FooterA></FooterA>
    </Router>

  </React.StrictMode>
);

