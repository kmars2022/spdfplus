import React from "react";
import ReactMarkdown from "react-markdown"
import pageMarkdown from "../markdown/motd.stories"
import remarkGfm from "remark-gfm";
import { Link, BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


const Home = () => {
    return (
        <>
        <div className="usa-section">
            ` <div className="grid-row">
                <main
                    className=""
                    id="main-content">
                {/* <main
                    className="usa-layout-docs__main desktop:grid-col-12 usa-prose usa-layout-docs"
                    id="main-content"> */}
                        <h1>NASA's Space Physics Data Facility (SPDF)</h1>

        <p>
        Space Physics Data Facility (SPDF) is the NASA active and permanent archive for non-solar heliophysics data (solar data at SDAC), per the NASA Heliophysics Science Data Management Policy. SPDF is a project of the Heliophysics Science
        Division (HSD) at NASA's Goddard Space Flight Center. SPDF also provides multi-project, cross-disciplinary access to data to enable correlative and collaborative research across discipline and mission boundaries with present and past
        missions. SPDF maintains the SSCweb database of spacecraft orbits, the OMNIweb cross-normalized database, and the Common Data Format (CDF) self-describing science data format and associated software.

        </p>
                    </main>


                </div>
                    <div className="grid-row">

                    
                    <div className="desktop:grid-col-auto">
        
                    <h2 style={{ padding: '2% 0%'}}>News &amp; Announcements</h2>
        {/* <ReactMarkdown children={pageText} remarkPlugins={[remarkGfm]} /> */}
        <ReactMarkdown children={pageMarkdown} remarkPlugins={[remarkGfm]} />

            {/* {{.Content}} */}
            
                <div className="boldFeature" style={{fontSize:'13px',  borderTop:'1px solid #069', paddingBottom: '0.5em', paddingTop: '0.5em', marginTop: '0.5em' }}><img src="/icons/forward.gif" alt="page icon" style={{textAlign: 'left'}} />&nbsp; New CDF Version 3.8.0 Released
                </div>
                <p style={{ textIndent: '1em'}}>

                <a href="//cdf.gsfc.nasa.gov" target="_blank">Common Data Format (CDF) </a>Version 3.8.0 is now available. Updates for Perl, IDL, Matlab, and Java interfaces and the <a href="./skteditor">SKTeditor CDF editor </a>are available. For
                further details and changes, see the <a href="//cdf.gsfc.nasa.gov/html/CDF_changesnote.html" target="_blank">CDF release notes</a>.

                <div className="boldFeature" style={{ fontSize: '13px',  borderTop:'1px solid #069', paddingBottom: '0.5em', paddingTop: '0.5em', marginTop:'0.5em'}}><img src="/icons/forward.gif" alt="page icon" style={{textAlign: 'left'}} />&nbsp; <Link to="./NewAnnouncements" target="_blank">Previous Parker Solar Probe (PSP) Data updates</Link></div>

                {/* <!-- <div class="boldFeature" style="font-size:13px;  border-top:1px solid #069; padding-bottom: 0.5em; padding-top:0.5em; margin-top:0.5em"><img src="/icons/forward.gif" alt="page icon" style={{textAlign: 'left'}}/>&nbsp; <a href="./news_announcements.html#HTTPS_ANNOUNCE" target="_blank"> Move from HTTP to HTTPS</a></div> -->

                <!-- <div class="boldFeature" style="font-size:13px;  border-top:1px solid #069; padding-bottom: 0.5em; padding-top:0.5em; margin-top:0.5em"><img src="/icons/forward.gif" alt="page icon" style={{textAlign: 'left'}}/>&nbsp; <a href="./news_announcements.html#SUNSPOT" target="_blank"> Revised Definition of the Sunspot Number Index</a></div> -->

                <!-- <div class="boldFeature" style="font-size:13px;  border-top:1px solid #069; padding-bottom: 0.5em; padding-top:0.5em; margin-top:0.5em"><img src="/icons/forward.gif" alt="page icon" style={{textAlign: 'left'}}/>&nbsp; <a href="./news_announcements.html#Relocate" target="_blank"> Relocation of Directories and Files Served by FTP by SPDF and NSSDC </a></div> --> */}
                <div className="boldFeature" style={{ fontSize: '13px',  borderTop:'1px solid #069', paddingBottom: '0.5em', paddingTop: '0.5em', marginTop:'0.5em'}}><img src="/icons/forward.gif" alt="page icon" style={{textAlign: 'left'}} />&nbsp;
                    <Link to="./NewAnnouncements" target="_blank">Let's Not Lose Our Data</Link></div>
                
                

                {/* <!-- <div class="boldFeature" style="font-size:13px;  border-top:1px solid #069; padding-bottom: 0.5em; padding-top:0.5em; margin-top:0.5em"><img src="/icons/forward.gif" alt="page icon" style={{textAlign: 'left'}}/>&nbsp; <a href="./news_announcements.html#Responsibilities" target="_blank">Changed Responsibilities in Archiving NASA Heliophysics Data</a></div> --> */}

                <div className="boldFeature" style={{ fontSize: '13px',  borderTop:'1px solid #069', paddingBottom: '0.5em', paddingTop: '0.5em', marginTop:'0.5em'}}><img src="/icons/forward.gif" alt="page icon" style={{textAlign: 'left'}} />&nbsp; <Link to="./NewAnnouncements" target="_blank">All News</Link></div>

                </p>

                <div className="boldFeature" style={{backgroundColor:'#ddd', fontSize:'13px',  border:'1px solid #069',  borderBottomWidth: '0', paddingBottom: '0.5em', paddingTop:'0.5em', marginTop: '0.5em'}}>&nbsp; Email list for SPDF Announcements</div>
                <p style={{backgroundColor:'#ddd', padding:'4px', border:'1px solid #069', borderTopWidth:'0'}}>
                Please contact us with any questions, problems, suggestions, and other comments by emailing <a href="mailto:NASA-SPDF-Support@nasa.onmicrosoft.com"></a>NASA-SPDF-Support@nasa.onmicrosoft.com
                <br />
                <b>Email list for SPDF Announcements: </b>
                Please contact us with any questions, problems, suggestions, and other comments by emailing
                <a href="//spdf.gsfc.nasa.gov" target="_blank">SPDF</a> software and services (changes, upgrades,
                outages). Postings to gsfc-spdf_announcements@lists.nasa.gov will be very
                infrequent but are especially useful to regular users of our web services
                and Java clients (CDAWeb+, xSonify, TIPSOD). To subscribe send an email to <a
                    href="mailto:gsfc-spdf-announcements-subscribe@lists.nasa.gov?Subject=Subscribe gsfc-spdf-announcements">gsfc-spdf-announcements-subscribe&#64;lists.nasa.gov</a>
                .
                </p>

            </div>
                
                    </div>`
        </div>
        </>
    )
}

export default Home;