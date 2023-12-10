import React from 'react';
import { Button, Container, Grid, Typography } from "@mui/material";
import heroImage from '../imges/home.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
        <Grid container spacing={4}>
          <Grid item sm={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography
              component="h1"
              variant="h3"
              fontSize="4rem"
              fontWeight="bolder"
              color="white" 
              sx={{ mt: "50px" }}
            >
              Discover Your Style
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: "20px", maxWidth: "500px" }}>
              Unleash the latest fashion trends and redefine your wardrobe with our exclusive collection of curated styles.
            </Typography>
           <Link to='/product'>
           <Button
           variant="contained"
           size="large"
           sx={{
             backgroundColor: 'primary.main', 
             color: 'white',
             mt: '20px',
           }}
         >
           Explore Now
         </Button>
           </Link>
                </Grid>
                <Grid item sm={4}>
                    <img
                        src={heroImage}
                        alt="Fashion"
                        style={{ width: "100%", borderRadius: "8px" }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default HeroSection;
