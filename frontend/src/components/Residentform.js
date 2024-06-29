import React, { useState } from 'react';
import './Residentform.css'; // Assuming you create a CSS file for the styles
import { Link } from 'react-router-dom';

function ResidentForm() {
  const [garbageType, setGarbageType] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleGarbageTypeChange = (type) => {
    setGarbageType(type);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission with image and other data here
    console.log('Submitted:', {
      name: event.target.name.value,
      email: event.target.email.value,
      garbageType,
      file: selectedFile
    });
    // Reset form fields or state after submission as needed
  };

  return (
    <div className='Bg2'>
      <div className="container">
        <div className="wrapper">
          <div className="title"><span>Report Garbage</span></div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="row">
              <input type="text" name="text " placeholder="Description" required />
            </div>
          
            <div className="row">
              <div className="garbage-type-buttons">
                <button
                  type="button"
                  className={garbageType === 'wetWaste' ? 'active' : ''}
                  onClick={() => handleGarbageTypeChange('wetWaste')}
                >
                  Wet Waste
                </button>
                <button
                  type="button"
                  className={garbageType === 'dryWaste' ? 'active' : ''}
                  onClick={() => handleGarbageTypeChange('dryWaste')}
                >
                  Dry Waste
                </button>
              </div>
            </div>
            <div className="row">
  <label htmlFor="file-upload" className="file-upload-label">
    <span className="upload-title">Upload Image:</span>
    <input
      id="file-upload"
      type="file"
      accept="image/*"
      onChange={handleFileChange}
    />
  </label>
</div>

            <br>
            </br>
            <div className="row button">
              <input type="submit" value="Submit" />
            </div>
          
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResidentForm;
