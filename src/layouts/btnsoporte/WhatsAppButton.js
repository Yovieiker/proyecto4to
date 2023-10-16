import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import React from 'react';

const WhatsAppButton = () => {

  return (
    <>

      <IconButton href='https://api.whatsapp.com/send/?phone=573126601727&text&type=phone_number&app_absent=0'   target="_blank" sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        color: '#fff',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)',
        "&:hover": {
          backgroundColor: '#1b8a44',
        }
      }}>
        <WhatsAppIcon fontSize="large" />
      </IconButton>
    </>
  );
};

export default WhatsAppButton;