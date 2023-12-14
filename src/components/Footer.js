import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container component="footer" sx={{ backgroundColor: '#f0f0f0', padding: 3, textAlign: 'center',}}>
      <Typography variant="body2" color="textSecondary">
        &copy; 2023 Shooper. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
