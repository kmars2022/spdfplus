import React from "react";
import ReactMarkdown from "react-markdown"
import pageMarkdown from "../markdown/staff.stories"
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw'




const Staff = () => {
    return(
         <>
          


        
  <div className="usa-section">
        <div className="grid-row">
        <main
              className=""
              id="main-content">
                <div id="staffTable">
             <ReactMarkdown children={pageMarkdown} remarkPlugins={[remarkGfm]} />
                </div>
            </main>
        </div>
      </div>

      
        </>
    )
}

export default Staff;