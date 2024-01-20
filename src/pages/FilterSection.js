import React from 'react';
import { Box, Button, Container, Grid } from '@mui/material';

const categories = [
  'All',
  'smartphones',
  'laptops',
  'fragrances',
  'skincare',
  'groceries',
  'home-decoration',
  'furniture',
  'Laptops',  
  'womens-dresses',
  'mens-shirts',
  'womens-shoes',
  'mens-shoes',
  'mens-watches',
];

const FilterSection = ({ handleFilter }) => {
  const renderButtons = () => {
    return categories.map((category) => (
      <Button
        key={category}
        color="inherit"
        variant="contained"
        sx={{ m: 1 }}
        onClick={() => handleFilter(category)}
      >
        {category}
      </Button>
    ));
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: '70px 0',  
      }}
    >
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {renderButtons()}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FilterSection;
