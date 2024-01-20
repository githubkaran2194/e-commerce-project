import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const EcommerceBlogPost = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Exploring Our Latest Product: Noice Smartwatch
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 2 }}>
          Published on January 19, 2024 by <span style={{fontWeight:"bold"}}>Noice</span>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
        Noise Force Rugged & Sporty 1.32" Bluetooth Calling Smart Watch, 550 NITS, 7 Days Battery, AI Voice Assistance, Smart Watch for Men (Teal Green)
        </Typography>
        <Typography fontWeight={'bold'} m='10px'>
        ${(2000).toFixed(2)} {''}
        <span style={{textDecoration:"line-through"}}>${(2000 / (1 - 374/ 100)).toFixed(2)}</span>
        </Typography>
        <Typography color={'error'} fontSize="13px" >{''} $ 75 OFF</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Paper sx={{p:'10px',m:"10px 0", ':hover':{cursor:"pointer", boxShadow:"0 0 12px"}}} variant='none'>
            <img
              src="https://m.media-amazon.com/images/I/61ttIzhB7FL._AC_SY400_.jpg"
              alt="XYZ Smartwatch"
              width={200}
              style={{ objectFit: 'contain', marginBottom: '10px'}}
            />
          </Paper>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
            {[1, 2, 3, 4].map((index) => (
              <Paper key={index} variant='outlined' sx={{ p: "20px", cursor: "pointer", ':hover': { boxShadow: "0 0 12px" } }}>
                <img
                  src="https://m.media-amazon.com/images/I/519qCLoSPjL._AC_SR480,480_.jpg"
                  alt={`Image ${index}`}
                  width={100}
                  style={{ objectFit: 'contain' }}
                />
                <Typography>Noise Force<br/> Smart Watch</Typography>
              </Paper>
            ))}
          </Box>
        </Box>
        <Typography variant="body1" sx={{ mt: 2 }}>
        Sporty & rugged design: Featuring an impact-resistant build, the smartwatch is designed to be sporty and rugged.
        </Typography>
      </Paper>
    </Container>
  );
};

export default EcommerceBlogPost;
