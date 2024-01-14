import React from 'react';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';
import { SliderData } from './SilderData';
import {  Image } from 'react-bootstrap';


const SliderHome = () => {
  return (
    <>
      <Carousel
        indicators={false}
        autoPlay
        swipe
      >
        {SliderData.map((slider) => (
          <Box key={slider.id} sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "white", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}>
            <Container className='home' maxWidth='md'>
              <Grid container spacing={4} sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
                <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'flex-start' }}>
                  <Typography
                    component="h1"
                    fontSize={{ xs: "1.8rem", sm: "2.4rem" }}
                    fontWeight="800"
                    sx={{ mt: { xs: "20px", sm: 3 }, mb: { xs: "20px", sm: "0px" }, textTransform: "uppercase", letterSpacing: "2px" }}
                  >
                    {slider.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mt: "20px", maxWidth: "600px", fontSize: { xs: "1rem", sm: "1.2rem" } }}>
                    {slider.description}
                  </Typography>
                  <Link to='/product' style={{ textDecoration: 'none' }}>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: 'black',
                        fontSize: { xs: "1.2rem", sm: "1.4rem" },
                        backgroundColor: "transparent",
                        p: { xs: "10px 20px", sm: "10px 30px" },
                        letterSpacing: "2px",
                        '&:hover': {
                          backgroundColor: "#333",
                          color: 'white',
                        },
                        m: { xs: '20px 0', sm: "30px 0" }
                      }}
                    >
                      Shop now →
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', mt: { xs: '40px', sm: "20px" } }}>
                  <Image src={slider.image} alt="wait..." fluid width={"100%"} height={'80%'}/>
                </Grid>
              </Grid>
            </Container>
          </Box>
        ))}
      </Carousel>
    </>
  );
};

export default SliderHome;
