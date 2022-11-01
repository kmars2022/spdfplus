import React from "react";
import ReactMarkdown from "react-markdown"
import pageMarkdown from "../markdown/acknowledgments_2011"
import remarkGfm from "remark-gfm";



const Acknowledgements_2011 = () => {
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

export default Acknowledgements_2011;