import React from "react";
// import footerImg from '';

const FooterA = () => {
    return(
        <>
        <footer className="usa-footer usa-footer--slim">
  <div className="grid-container usa-footer__return-to-top">
    <a href="#">Return to top</a>
  </div>
  <div className="usa-footer__primary-section">
    <div className="usa-footer__primary-container grid-row">
      
      <div className="mobile-lg:grid-col-4">
        
      </div>
    </div>
  </div>
  <div className="usa-footer__secondary-section">
    <div className="grid-container">
      <div className="usa-footer__logo grid-row">
        <div className="grid-col-3">
          <img className="usa-footer" src={require("../../images/nasa-logo-web-rgb.jpg")} alt="NASA Logo" />
        </div>
       
        <div className="grid-col-3">
          <p className="usa-footer">NASA Official: Robert M. Candey<br></br>(301)286-6707, Robert.M.Candey@nasa.gov<br></br>Curator: Tami Kovalick<br></br>Last Modified:</p>
        </div>
        <div className="grid-col-3">
          <p className="usa-footer">Contact SPDF:             <a href="mailto:NASA-SPDF-Support@nasa.onmicrosoft.com?Subject=Feedback/Support from SPDF">NASA-SPDF Feedback/Support</a>
<br></br><a href="https://www.nasa.gov/about/highlights/HP_Privacy.html">Privacy Policy and Important Notices</a></p>
        </div>
      </div>
    </div>
  </div>
</footer>
        </>
    )
}

export default FooterA;