// Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  };

  return (
    <Box style={footerStyle}>
      <Typography variant="body1">&copy; 2023 shopper All rights reserved.</Typography>
      <Typography variant="body2">karanchavan2194@gmail.com</Typography>
    </Box>
  );
};

export default Footer;
