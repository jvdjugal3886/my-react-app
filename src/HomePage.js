import { Button } from '@mui/material';
import React, { useState } from 'react';
import ApplyLeavePopup from './ApplyLeavePopup';
import SelfieCapturePopup from './SelfieCapturePopup';

const HomePage = () => {
  const [isSelfiePopupOpen, setSelfiePopupOpen] = useState(false);
  const [isLeavePopupOpen, setLeavePopupOpen] = useState(false);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const buttonStyle = {
    width: '208px',
    height: '40px',
    marginRight: '12px',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '8px',
  };

  return (
    <div style={containerStyle}>
      <Button 
        variant="contained" 
        style={buttonStyle}
        onClick={() => setSelfiePopupOpen(true)}
      >
        Check In
      </Button>
      <Button 
        variant="contained" 
        style={buttonStyle}
        onClick={() => setLeavePopupOpen(true)}
      >
        Apply Leave
      </Button>
      <Button 
        variant="contained" 
        style={buttonStyle}
      >
        Button 3
      </Button>
      <SelfieCapturePopup isOpen={isSelfiePopupOpen} onClose={() => setSelfiePopupOpen(false)} />
      <ApplyLeavePopup isOpen={isLeavePopupOpen} onClose={() => setLeavePopupOpen(false)} />
    </div>
  );
};

export default HomePage;