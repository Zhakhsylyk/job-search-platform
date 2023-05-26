import React from "react";
// Import the useDropzone hooks from react-dropzone
import { useDropzone } from "react-dropzone";
import "./style.scss";
import upload from "../../images/upload.svg";
import pdf from "../../images/pdf-icon.png";
const Dropzone = ({ onDrop, accept }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    accept,
  });

  /*
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */
  console.log(acceptedFiles)
  return (
    <div
      className={acceptedFiles.length !== 0 ? "dropzone-div_default " : "dropzone-div"}
      {...getRootProps()}
    //   style={{ border: " 3px #4540db solid" }}
    >
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        {
          acceptedFiles.length === 0 ?
            isDragActive ? (
              <div>
                <p className="dropzone-content">Release to drop the files here</p>
                <img src={upload} width={50} height={50} />
              </div>
            ) : (
              <div>
                <p className="dropzone-content">Choose a file or drag it here</p>
                <img src={upload} width={50} height={50} />
              </div>
            )
            : (<div style={{ float: "left" }}>
              {acceptedFiles.map(item => (
                <div>
                  <img src={pdf} width={100} height={100} />
                  <p style={{ margin: 0, fontWeight: 600 }}>{item.name}</p>
                </div>
              )
              )
              }
            </div>)
        }
      </div>
    </div>
  );
};

export default Dropzone;

