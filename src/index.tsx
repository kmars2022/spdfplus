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
import Acknowledgements_2006 from './pages/Acknowledgements2006';
import Acknowledgements_2007 from './pages/Acknowledgements2007';
import Acknowledgements_2008 from './pages/Acknowledgements2008';
import Acknowledgements_2009 from './pages/Acknowledgements2009';
import Acknowledgements_2010 from './pages/Acknowledgements2010';
import Acknowledgements_2011 from './pages/Acknowledgements2011';
import Acknowledgements_2012 from './pages/Acknowledgements2012';
import Acknowledgements_2013 from './pages/Acknowledgements2013';
import Acknowledgements_2014 from './pages/Acknowledgements2014';
import Acknowledgements_2015 from './pages/Acknowledgements2015';
import Acknowledgements_2016 from './pages/Acknowledgements2016';
import Acknowledgements_2017 from './pages/Acknowledgements2017';
import Acknowledgements_2018 from './pages/Acknowledgements2018';
import Acknowledgements_2019 from './pages/Acknowledgements2019';
import Acknowledgements_2020 from './pages/Acknowledgements2020';
import Acknowledgements_2021 from './pages/Acknowledgements2021';
import Statistics from './pages/Statistics';
import HistoryP from './pages/History';
import SubmittingData from './pages/submittingData';
import NewData from './pages/newData';
import Announcements from './pages/new_announcements';
import Reports from './pages/reports';
import Cdawlib from './pages/cdawlib';
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
          <Route path="/NewAnnouncements" element={<Announcements/>}>
          </Route>
          <Route path="/reports" element={<Reports/>}>
          </Route>
          <Route path="/cdawlib" element={<Cdawlib/>}>
          </Route>
          <Route path="/Acknowledgements_2006" element={<Acknowledgements_2006/>}>
          </Route>
          <Route path="/Acknowledgements_2007" element={<Acknowledgements_2007/>}>
          </Route>
          <Route path="/Acknowledgements_2008" element={<Acknowledgements_2008/>}>
          </Route>
          <Route path="/Acknowledgements_2009" element={<Acknowledgements_2009/>}>
          </Route>
          <Route path="/Acknowledgements_2010" element={<Acknowledgements_2010/>}>
          </Route>
          <Route path="/Acknowledgements_2011" element={<Acknowledgements_2011/>}>
          </Route>
          <Route path="/Acknowledgements_2012" element={<Acknowledgements_2012/>}>
          </Route>
          <Route path="/Acknowledgements_2013" element={<Acknowledgements_2013/>}>
          </Route>
          <Route path="/Acknowledgements_2014" element={<Acknowledgements_2014/>}>
          </Route>
          <Route path="/Acknowledgements_2015" element={<Acknowledgements_2015/>}>
          </Route>
          <Route path="/Acknowledgements_2016" element={<Acknowledgements_2016/>}>
          </Route>
          <Route path="/Acknowledgements_2017" element={<Acknowledgements_2017/>}>
          </Route>
          <Route path="/Acknowledgements_2018" element={<Acknowledgements_2018/>}>
          </Route>
          <Route path="/Acknowledgements2019" element={<Acknowledgements_2019/>}>
          </Route>
          <Route path="/Acknowledgements2020" element={<Acknowledgements_2020/>}>
          </Route>
          <Route path="/Acknowledgements2021" element={<Acknowledgements_2021/>}>
          </Route>
        </Routes>
      </main>

      
    <FooterA></FooterA>
    </Router>

  </React.StrictMode>
);

