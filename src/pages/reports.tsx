import React from "react";
import ReactMarkdown from "react-markdown"
import pageMarkdown from "../markdown/reports"
import remarkGfm from "remark-gfm";



const reports = () => {
    return(
         <>
          


        
  <div className="usa-section">
        <div className="grid-row">
        <main
              className=""
              id="main-content">
             <ReactMarkdown children={pageMarkdown} remarkPlugins={[remarkGfm]} />
            </main>
        </div>
      </div>

      
        </>
    )
}

export default reports;