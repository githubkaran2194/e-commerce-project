import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterSection from './FilterSection';

const Product = ({ addToCart }) => {
  const [data, setData] = useState([]);

  const img = {
    objectFit: 'contain',
    width: '100%',
    transition: '0.5s',
    '&:hover': {
      scale: '1.1',
    },
  };

  const navigate = useNavigate();

  const handleSubmit = (id) => {
    navigate(`/productDetails/${id}`);
    console.log(id);
  };

  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products`;

    const fetchProduct = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
        setFilterData(response.data)
      } catch (error) {
       alert(error);
      }
    };

    fetchProduct();
  }, []);

  const [filterData, setFilterData] = useState([]);

    const handleFilter = (category) => {
        if (category === 'All') {
            setFilterData(data);
        } else {
            const updatedFilter = data.filter((item) => item.category.toLowerCase().includes(category.toLowerCase()));
            setFilterData(updatedFilter);
        }
    };

  return (
    <Container sx={{m:"10px 0"}}>
    <FilterSection handleFilter={handleFilter}/>
      <Grid container spacing={3}>
        {filterData.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} sx={{ mb: '20px' }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '10px', cursor: 'pointer' }}>
              <CardMedia component="img" src={item.image} alt={item.title} height="140" sx={img} onClick={() => handleSubmit(item.id)} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography component="div" fontSize={'16px'}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">${item.price}</Typography>
              </CardContent>
              <CardActions>
              <Button
              variant="contained"
              color="success"
              onClick={() => addToCart(item)}
            >
              Add To Cart
            </Button>
            
                <Button variant="contained" color="info" onClick={() => handleSubmit(item.id)}>
                  Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Product;
