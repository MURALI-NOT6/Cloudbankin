import React, { useState } from "react";

const FileUpload = ({ field }: any) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [reset, setReset] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setReset(true);
    } else {
      setReset(false);
    }
  };

  return (
    <div className="fileUpload">
      {reset === false ? (
        <>
          <p>
            <span>Browse</span> & Drag & Drop to Attach a file
          </p>
          <input type="file" onChange={handleFileChange} />
        </>
      ) : (
        <div className="fileName">
          {fileName && <p>Uploaded File: {fileName}</p>}
          <div
            className="closeIcon"
            onClick={() => {
              setReset(false);
            }}
          >
            Remove
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
