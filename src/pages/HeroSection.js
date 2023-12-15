import React from 'react';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import heroImage from '../imges/homeGirl.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <Container className='home' maxWidth='md'>
                <Grid container spacing={2} sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
                    <Grid item xs={12} sm={6} md={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography
                            component="h1"
                            fontSize="1rem"
                            fontWeight="bolder"
                            color="white"
                            sx={{ mt: { xs: "20px", sm: 3 }, mb: { xs: "20px", sm: "0px" }, textTransform: "uppercase", letterSpacing: "2px" }}
                        >
                            Summer collection
                        </Typography>
                        <Typography
                            component="h2"
                            variant="h6"
                            fontSize="3rem"
                            fontWeight="900"
                            color="#000"
                            sx={{ mt: "20px", mb: "10px" }}
                        >
                            Fall - Winter collection 2023
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: "20px", maxWidth: "500px" }}>
                            Unleash the latest fashion trends and redefine your wardrobe with our exclusive collection of curated styles.
                        </Typography>
                        <Link to='/product' style={{ textDecoration: 'none' }}>
                            <Button
                                variant="contained"
                                size="small"
                                sx={{
                                    color: 'white',
                                    backgroundColor: "black",
                                    mt: '20px',
                                    padding: "8px 20px",
                                    letterSpacing: "2px",
                                }}
                            >
                                Shop now →
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', mt: { xs: '20px', sm: 0 } }}>
                        <img
                            src={heroImage}
                            alt="Fashion"
                            style={{ width: "100%", borderRadius: "8px" }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default HeroSection;
