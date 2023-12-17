import { Box, Button, Container } from '@mui/material';

const FilterSection = ({ handleFilter }) => {

    return (
        <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: { xs: '70px 0', sm: '60px', md:"70px" },
      }}
    >
      <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Button
          color='inherit'
          variant='contained'
          sx={{ m: "5px" }}
          onClick={() => handleFilter('All')}
        >
          All
       l</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('smartphones')}>smartphones</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('laptops')}>laptops</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('fragrances')}>fragrances</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('skincare')}>skincare</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('groceries')}>groceries</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('home-decoration')}>home-decoration</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('furniture')}>furniture</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('tops')}>tops</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('womens-dresses')}>womens-dresses</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('mens-shirts')}>mens-shirts</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('womens-shoes')}>womens-shoes</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('mens-shoes')}>mens-shoes</Button>
                <Button color='inherit' variant='contained' sx={{ m: "5px" }} onClick={() => handleFilter('mens-watches')}>mens-watches</Button>
            </Box>
        </Container>
    );
};

export default FilterSection;
