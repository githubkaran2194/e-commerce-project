import React from "react";
import { Box, Card, CardContent, CardMedia, Container, Grid, Paper, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { ServiceData } from "./ServiceData";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShopIcon from "@mui/icons-material/Shop";

const Services = () => {
  return (
    <Container>
      <Paper sx={{ p: 3}}>
        <Typography variant="h5" gutterBottom textAlign={'center'} fontWeight={'bold'}>
          100% Customer Satisfaction
        </Typography>
        <Typography variant="body1" paragraph textAlign={'center'}>
          We provide the best customer experience with our top-notch services.
        </Typography>
        <Grid container spacing={3}>
          {ServiceData.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column", cursor:'pointer',transition:"0.3s",':hover':{boxShadow:"0 0 3px"} }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={'http://localhost:3000/static/media/Influencer%20Marketing%20on%20Food%20Products.902c1cd631d477829c41.png'}
                  alt={item.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  {item.customerReviews && (
                    <List>
                      {item.customerReviews.map((review) => (
                        <ListItem key={review.id}>
                          <ListItemIcon>
                            <ShopIcon />
                          </ListItemIcon>
                          <ListItemText primary={review.comment} secondary={`by ${review.name}`} />
                        </ListItem>
                      ))}
                    </List>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Services;
