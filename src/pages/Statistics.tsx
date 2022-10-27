import React from "react";
import ReactMarkdown from "react-markdown"
import pageMarkdown from "../markdown/statistics.stories"
import remarkGfm from "remark-gfm";

const Statistics = () => {
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

export default Statistics;