import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, ButtonGroup, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Add, Delete, Remove } from '@mui/icons-material';
import CheckoutForm from './CheckoutForm';

const Checkout = ({ cart, setCart, isLoggedIn }) => {
  const [openCheckout, setOpenCheckout] = useState(false);

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isLoggedIn) {
      navigate('/login');
      alert("please login");
    } else {
      setOpenCheckout(true);
    }
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleIncrease = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 } : cartItem
    );
    setCart(updatedCart);
  };
  
  const handleDecrease = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id && (cartItem.quantity || 0) > 1
        ? { ...cartItem, quantity: (cartItem.quantity || 0) - 1 }
        : cartItem
    );
    setCart(updatedCart);
  };
  

  return (
    <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', m: '60px 0' }}>
      <Container>
        {cart.length === 0 ? (
          <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'monospace', color: 'white', m: '60px 0' }}>
            Your cart is empty
          </Typography>
        ) : (
          <>
            <Typography variant="h4" mt={2} sx={{ fontWeight: 'bold', fontFamily: 'monospace', color: 'white' }}>
              Checkout
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Paper display="flex" flexDirection="column" alignItems="center">
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">Product</TableCell>
                          <TableCell align="center">Name</TableCell>
                          <TableCell align="center">Price</TableCell>
                          <TableCell align="center">Quantity</TableCell>
                          <TableCell align="center">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cart.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                              <Link to={`/productDetails/${item.id}`} key={item.id}>
                                <img src={item.thumbnail} alt={item.title} width={100} />
                              </Link>
                            </TableCell>
                            <TableCell align="center">{item.title}</TableCell>
                            <TableCell align="center">${item.price}</TableCell>
                            <TableCell align="center">{item.quantity}</TableCell>
                            <TableCell align="center">
                              <ButtonGroup>
                                <Button onClick={() => handleDecrease(item)}>
                                  <Remove />
                                </Button>
                                <Button onClick={() => handleIncrease(item)}>
                                  <Add />
                                </Button>
                                <Button onClick={() => handleRemove(item.id)}>
                                  <Delete />
                                </Button>
                              </ButtonGroup>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper mt={2} sx={{ padding: '20px 0' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'monospace', color: 'black' }}>
                    Order Summary
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', fontFamily: 'monospace', color: 'black' }}>
                    Items in Cart: {cart.reduce((total, item) => total + item.quantity, 0)}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', fontFamily: 'monospace', color: 'black' }}>
                    Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
                  </Typography>
                  <CheckoutForm openCheckout={openCheckout} setOpenCheckout={setOpenCheckout}/>
                  <Button variant="contained" sx={{ mt: '10px' }} onClick={handleCheckout}>
                    Checkout
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Checkout;
