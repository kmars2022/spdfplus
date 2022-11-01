import React from "react";
import ReactMarkdown from "react-markdown"
import pageMarkdown from "../markdown/CDAWlib"
import remarkGfm from "remark-gfm";



const cdawlib = () => {
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

export default cdawlib;