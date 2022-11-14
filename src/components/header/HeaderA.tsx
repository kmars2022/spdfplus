import React from "react";
import { Link } from 'react-router-dom';
import heroImg from '../../images/Helio_Teams_Background_5_SPDF_Crop_Wider.jpg';
// import searchIcon from '../../images/search--white.svg';




const HeaderA = () => {
    return(
        <>
        <div className="usa-overlay"></div>
        <section
        
        className="usa-hero"
        style={{
          backgroundImage: `url(${heroImg})`
        }}
        aria-label="SPDF Banner"
      >
        <div className="grid-container">
          {/* <div class="usa-hero__callout"> */}
                    {/* <img className="usa-footer__logo-img" src={require("../../images/nasa-logo-web-rgb.jpg")} alt="NASA Logo" /> */}
        <span><br/><br/><br/></span>
        
          <div>
           

           
          </div>
        </div>
       
      </section>
<header className="usa-header usa-header--basic">
  <div className="usa-nav-container">
    <div className="usa-navbar">
      {/* <div className="usa-logo" id="-logo">
        <em className="usa-logo__text"><a href="/" title="Home">Home</a></em>
      </div> */}
      <button type="button" className="usa-menu-btn">Menu</button>
    </div>
    <nav aria-label="Primary navigation" className="usa-nav">
      <button type="button" className="usa-nav__close">
        <img src={require('../../images/close.svg').default} role="img" alt="Close" />
        
      </button>
      <ul className="usa-nav__primary usa-accordion">
        <li className="usa-nav__primary-item">
          <a href="https://www.nasa.gov/" className="usa-nav-link"><img className="usa-footer__logo-img spdf-Logo" src={require("../../images/nasa-logo-web-rgb.jpg")} alt="NASA Logo" />
</a>
        </li>
        <li className="usa-nav__primary-item">
          <a href="https://www.nasa.gov/goddard" className="usa-nav-link"><span>Goddard</span></a>
        </li>
       
        <li className="usa-nav__primary-item">
          <button
            type="button"
            className="usa-accordion__button usa-nav__link "
            aria-expanded="false"
            aria-controls="basic-nav-section-one"
          >
            <span>SPDF</span>
          </button>
          <ul hidden id="basic-nav-section-one" className="usa-nav__submenu">
            <li className="usa-nav__submenu-item">
              <Link to='/'>Home</Link>
            </li>
            <li className="usa-nav__submenu-item">
            <Link to='About'>About</Link>
            </li>
            <li className="usa-nav__submenu-item">
            <Link to='Staff'>Staff</Link>
            </li>
            <li className="usa-nav__submenu-item">
            <Link to="Acknowledgements">Acknowledgements</Link>            </li>
            <li className="usa-nav__submenu-item">
            <Link to="Statistics">Usage Statistics</Link>            </li>
            <li className="usa-nav__submenu-item">
            <Link to="History">History</Link>            </li>
            <li className="usa-nav__submenu-item">
            <a href="mailto:NASA-SPDF-Support@nasa.onmicrosoft.com?Subject=Feedback/Support from SPDF">SPDF Feedback/Support</a>
            </li>
          </ul>
        </li>
        <li className="usa-nav__primary-item">
          <button
            type="button"
            className="usa-accordion__button usa-nav__link"
            aria-expanded="false"
            aria-controls="basic-nav-section-two"
          >
            <span>Data & Orbits</span>
          </button>
          <ul hidden id="basic-nav-section-two" className="usa-nav__submenu">
            <li className="usa-nav__submenu-item">
            <a href="https://heliophysicsdata.gsfc.nasa.gov/">Heliophysics Data (search) Portal</a>            </li>
            <li className="usa-nav__submenu-item">
            <a href="data_orbits.html">Gateway to SPDF Services</a>
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://spdf.gsfc.nasa.gov/pub/">Direct HTTP(S) to Data</a>            </li>
            <li className="usa-nav__submenu-item">
            <a href="ftps://spdf.gsfc.nasa.gov/pub/">Direct FTP(S) to Data (FTPS required)</a>            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://cdaweb.gsfc.nasa.gov/">CDAWeb (data browser)</a>

            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://cdaweb.gsfc.nasa.gov/WebServices/REST/CdasIdlLibrary.html">CDAWeb Inside IDL </a>

            </li>
            <li className="usa-nav__submenu-item">
            <a href="">CDAWeb Web Service API</a>
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://omniweb.gsfc.nasa.gov/">OMNIWeb Plus (now including COHOWeb, ATMOWeb, FTP Browser, HelioWeb and CGM)</a>
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://cdaweb.gsfc.nasa.gov/hapi">Heliophysics API (HAPI)</a>
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://sscweb.gsfc.nasa.gov/">SSCWeb (orbit search)</a>
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://cdaweb.gsfc.nasa.gov/cgi-bin/gif_walk">GIFWalk data and orbit plots</a>
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://cdaweb.gsfc.nasa.gov/alternative_access_methods.html">Alternative Data Access Methods</a>
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://spdf.gsfc.nasa.gov/new_users.html">SDAC VSO - Virtual Solar Observatory</a>
            </li>
            <li className="usa-nav__submenu-item">
            <Link to='/NewData'>SDAC - Solar Data Analysis Center</Link>
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://spdf.gsfc.nasa.gov/new_users.html">More information on Data Access for New Users</a>
            </li>
          </ul>
        </li>
        <li className="usa-nav__primary-item">
          <button
            type="button"
            className="usa-accordion__button usa-nav__link "
            aria-expanded="false"
            aria-controls="basic-nav-section-three"
          >
            <span>Software</span>
          </button>
          <ul hidden id="basic-nav-section-three" className="usa-nav__submenu">
          <li className="usa-nav__submenu-item">
          <a href="https://cdf.gsfc.nasa.gov/">CDF (Common Data Format)</a>
          </li>
          <li className="usa-nav__submenu-item">
          <a href="https://spdf.gsfc.nasa.gov/sp_use_of_cdf.html">Space Physics use of CDF</a>
          </li>
          <li className="usa-nav__submenu-item">
          <a href="https://cdf.gsfc.nasa.gov/html/dttools.html">CDF/netCDF/FITS/HDF/XML/ASCII Format Translations</a>
          </li>
          <li className="usa-nav__submenu-item">
          <a href="https://spdf.gsfc.nasa.gov/skteditor/">CDF SKTEditor</a> 
          </li>
          <li className="usa-nav__submenu-item">
          <a href="https://spdf.gsfc.nasa.gov/makecdf.html">MakeCDF</a>
          </li>
          <li className="usa-nav__submenu-item">
          <Link to="/cdawlib">CDAWlib</Link>
          </li>
          <li className="usa-nav__submenu-item">
          <a href="https://cdaweb.gsfc.nasa.gov/cdaweb/cdfx/">CDFX (IDL)</a> 
          </li>
          <li className="usa-nav__submenu-item">
          <a href="https://spdf.gsfc.nasa.gov/research/visualization/visbard/">ViSBARD (visualization)</a>
          </li>
          </ul>
        </li>
        <li className="usa-nav__primary-item">
          <button
            type="button"
            className="usa-accordion__button usa-nav__link"
            aria-expanded="false"
            aria-controls="basic-nav-section-four"
          >
            <span>Submit Data</span>
          </button>
          <ul hidden id="basic-nav-section-four" className="usa-nav__submenu">
            <li className="usa-nav__submenu-item">
            <a href="archive_newdata_reqt.html">New mission data requirements</a> 
            </li>
            <li className="usa-nav__submenu-item">
            <a href="submitting_data.html">Overview of SPDF Data Submission Guidelines and Procedures</a> 
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://hpde.gsfc.nasa.gov/spase_metadata.html">Registering Data Products with SPASE metadata descriptions</a> 
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://spdf.gsfc.nasa.gov/sp_use_of_cdf.html">ISTP/IACG Metadata Guidelines for HPDE Data File Internal Metadata</a> 
            </li>
            <li className="usa-nav__submenu-item">
            <a href="filenaming_recommendations.html">Recommended file and data collection naming practices</a> 
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://github.com/hapi-server/uri-templates/wiki/Specification">Heliophysics URI Template Standard</a> 
            </li>
          </ul>
        </li>
        <li className="usa-nav__primary-item">
          <button
            type="button"
            className="usa-accordion__button usa-nav__link"
            aria-expanded="false"
            aria-controls="basic-nav-section-five"
          >
            <span>Heliophysics Resources</span>
          </button>
          <ul hidden id="basic-nav-section-five" className="usa-nav__submenu">
            <li className="usa-nav__submenu-item">
            <a href="https://hpde.gsfc.nasa.gov/">NASA's Heliophysics Data Environment</a> 
            </li>
            <li className="usa-nav__submenu-item">
            <a href="http://www.spase-group.org/">SPASE Data Model and Dictionary</a> 
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://ihdea.net/">IHDEA - International Heliophysics Data Environment Alliance</a> 
            </li>
            <li className="usa-nav__submenu-item">
            <a href="http://www.steminnovationlab.org/">Heliophysics Education and Public Outreach</a> 
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://svs.gsfc.nasa.gov/">Science Visualization Studio</a> 
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://ui.adsabs.harvard.edu/">ADS bibliographic search</a> 
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://science.gsfc.nasa.gov/heliophysics/">Heliophysics Science Division (670)</a> 
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://science.gsfc.nasa.gov/heliophysics/heliospheric/"> Heliospheric Physics Laboratory (672)</a> 
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://nssdca.gsfc.nasa.gov/">NSSDCA - National Space Science Data Coordinated Archive</a> 
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://heasarc.gsfc.nasa.gov/docs/heasarc/other_archives.html">Other NASA Archives</a> 
            </li>
            <li className="usa-nav__submenu-item">
            <a href="https://github.com/hapi-server/uri-templates/wiki/Specification">Heliophysics URI Template Standard</a>
            </li>
          </ul>
        </li>
        <li className="usa-nav__primary-item">
          <button
            type="button"
            className="usa-accordion__button usa-nav__link"
            aria-expanded="false"
            aria-controls="basic-nav-section-six"
          >
            <span>Other Resources</span>
          </button>
          <ul hidden id="basic-nav-section-six" className="usa-nav__submenu">
          <li className="usa-nav__submenu-item">
          <a href="https://sdac.virtualsolar.org/cgi/search">SDAC VSO - Virtual Solar Observatory</a>
          </li>
          <li className="usa-nav__submenu-item">
          <a href="https://umbra.nascom.nasa.gov/index.html">SDAC - Solar Data Analysis Center</a>
          </li>
          <li className="usa-nav__submenu-item">
          <a href="https://ccmc.gsfc.nasa.gov/">CCMC - Community Coordinated Modeling Center</a>
          </li>
          <li className="usa-nav__submenu-item">
          <a href="https://ccmc.gsfc.nasa.gov/modelweb/">ModelWeb at CCMC</a>
          </li>
          <li className="usa-nav__submenu-item">
          <a href="https://ui.adsabs.harvard.edu/">VEPO - Virtual Energetic Particle Observatory</a>
          </li>
          <li className="usa-nav__submenu-item">
          <a href="https://ui.adsabs.harvard.edu/">VWO - Virtual Wave Observatory</a>
          </li>
          <li className="usa-nav__submenu-item">
          <a href="https://spdf.gsfc.nasa.gov/research/lunasox/">LunaSOX - Lunar Solar Origins Exploration</a>
          </li>
          <li className="usa-nav__submenu-item">
          <a href="https://omniweb.gsfc.nasa.gov/ftpbrowser/bowshock.html">Multi-satellite Bow Shock Database</a>
          </li>
          <li className="usa-nav__submenu-item">
          <a href="https://omniweb.gsfc.nasa.gov/ftpbrowser/magnetopause.html">Multi-satellite Magnetopause Crossing Database</a>
          </li>
          </ul>
        </li>
        
      </ul>
      <section aria-label="Search component">
        <form className="usa-search usa-search--small" role="search">
          <label className="usa-sr-only" htmlFor="search-field">Search</label>
          <input
            className="usa-input"
            id="search-field"
            type="search"
            name="search"
          />
          <button className="usa-button" type="submit">
            <img
              src={require('../../images/search--white.svg').default}
              className="usa-search__submit-icon"
              alt="Search"
            />
          </button>
        </form>
      </section>
    </nav>
  </div>
</header>
        </>
    )
}

export default HeaderA;