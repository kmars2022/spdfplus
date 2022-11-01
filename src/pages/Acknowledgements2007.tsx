import React from "react";
import ReactMarkdown from "react-markdown"
import pageMarkdown from "../markdown/acknowledgments_2007"
import remarkGfm from "remark-gfm";



const Acknowledgements_2007 = () => {
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

export default Acknowledgements_2007;