import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import about from '../imges/about.jpg'

const About = () => {
  return (
    <>
      <Container sx={{ display:"flex", justifyContent:"center", alignItems:"center", m:"90px 0"}}>
      <Box>
        <Grid container spacing={4}>
          <Grid item sm={6} md={6} lg={6}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, height: '100%', p:"10px" }}>
              <CardContent>
                <Typography sx={{ mb: 2, fontSize:"50px", fontWeight:"bolder", fontFamily:"inherit"
                }}>
                  About Us
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color:"grey" }}>
                Welcome to Shopper, we're all about making your shopping experience exceptional. Our core belief is that simplicity leads to satisfaction. We're on a mission to provide you with a hassle-free journey, allowing you to effortlessly explore and acquire your desired products.

At Shopper, our philosophy is “simplicity is key”. We aim to deliver an efficient shopping journey enabling our clients to easily explore and acquire their favorite items.

Our team constantly explores new ways to present our merchandise in the clearest and most informative manner, ensuring that our customers are well-informed about their purchases.

With a focus on sustainability and eco-friendliness, Shopper eCommerce offers environmentally conscious products while maintaining our minimalistic vision.
                </Typography>
                <Typography variant="body2">
                 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={6} lg={6}>
            <img
              src={about}
              alt="Fashion"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>
        </Grid>
        </Box>
      </Container>
    </>
  )
}

export default About;
