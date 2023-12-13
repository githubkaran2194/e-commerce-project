import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import about from '../imges/about.jpg'

const About = () => {
  return (
    <>
      <Container sx={{ display:"flex", justifyContent:"center", alignItems:"center", height: "100vh" }}>
        <Grid container spacing={4}>
          <Grid item sm={6} md={6} lg={6}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, height: '100%', p:"10px" }}>
              <CardContent>
                <Typography variant="h4" sx={{ mb: 2, fontSize:"70px", fontWeight:"bolder", fontFamily:"inherit" }}>
                  About Us
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color:"grey" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dicta esse recusandae eveniet non at vitae corrupti illo est consequatur dolores aliquam vero veniam iusto odit facere, sint, laudantium neque.
                </Typography>
                <Typography variant="body2">
                  At [Your Brand Name], we are passionate about [your mission or purpose]. Our journey began with the vision to [briefly describe your vision or goal]. We believe in [mention any core values or principles] and strive to [what sets you apart from others].
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
      </Container>
    </>
  )
}

export default About;
