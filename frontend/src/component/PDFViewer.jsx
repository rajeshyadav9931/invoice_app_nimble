import React, { useState } from 'react'
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import PDFfile from "../assets/sample.pdf"

function PDFViewer() {
  const [numPages,setNumPages]=useState(null)
  function onDocumentSuccess({numPages}){
         setNumPages(numPages)
  }

  return (
    <div style={{display:"flex", justifyContent:"left"}}>
        <div style={{margin:"5px", width:"800px", height:"850px", border:"3px solid black"}}>
             <Document file={PDFfile} onLoadSuccess={onDocumentSuccess}>
             {
                  Array(numPages).fill().map((_,i) =>(<Page pageNumber={i+1}> </Page>))
             }
             </Document>
        </div>
    </div>
  )
}

export default PDFViewer;