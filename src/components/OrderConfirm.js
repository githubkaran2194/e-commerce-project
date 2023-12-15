import React from 'react';
import { Dialog, Grid, Typography } from '@mui/material';

const OrderConfirm = ({ orderDone }) => {
  return (
    <Dialog open={orderDone}>
      <Grid container spacing={2}>
        {/* First Grid Item */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Left Grid Content</Typography>
          {/* Add your other content here */}
        </Grid>

        {/* Second Grid Item */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Right Grid Content</Typography>
          {/* Add your other content here */}
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default OrderConfirm;
