import React, { useState } from "react";

// Core viewer
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Create new plugin instance:  const defaultLayoutPluginInstance = defaultLayoutPlugin();
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library

const GamePdf = () => {
    // Create new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    // for onchange event
    const [pdfFile, setPdfFile] = useState(null);
    const [pdfFileError, setPdfFileError] = useState('');
    // for submit event
    const [viewPdf, setViewPdf] = useState(null);
    
    // onchange event
    const fileType=['application/pdf'];
    const handlePdfFileChange = (e) => {
      let selectedFile = e.target.files[0];
      if(selectedFile) {
        if(selectedFile && fileType.includes(selectedFile.type)) {
            let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) => {
                  setPdfFile(e.target.result);
                  setPdfFileError('');
                }
        }
        else {
          setPdfFile(null);
          setPdfFileError('Please select valid pdf file');
        }
      }
      else{
        console.log('select your file');
      }
    }
    
    // form submit
    const handlePdfFileSubmit = (e) => {
      e.preventDefault();
      if(pdfFile !== null) {
        setViewPdf(pdfFile);
      }
      else{
        setViewPdf(null);
      }
    }
    

    return (
        <div className="ui placeholder segment">
            
            {/* <div className="ui icon header">
        

                <i className="pdf file outline icon" />
            </div> */}

        <form className="ui icon header" onSubmit={handlePdfFileSubmit}>
            <i className="pdf file outline icon" />

            <input type="file" required onChange={handlePdfFileChange} />
                {pdfFileError}

            <button type="submit" className="ui primary button">Preview PDF Document</button>
        </form>

        
      <div className='pdf-container'>
        {/* show pdf conditionally (if we have one)  */}
        {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={viewPdf}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}

      {/* if we dont have pdf or viewPdf state is null */}
      {!viewPdf&&<>No pdf file selected</>}
      </div>


        </div>
    );
}

export default GamePdf;