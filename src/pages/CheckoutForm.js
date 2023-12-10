import React, { useState } from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Box, Button, Typography } from '@mui/material';

const ShippingAddressForm = () => {
  const [address, setAddress] = useState({
    fName: '',
    lName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    state: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  return (
    <>
      <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '26px' }}>Shipping Address</Typography>
      <Grid container spacing={2} sx={{ p: '20px' }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            required
            name="fName"
            value={address.fName}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            required
            name="lName"
            value={address.lName}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            required
            name="address"
            value={address.address}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            required
            name="city"
            value={address.city}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Postal Code"
            variant="outlined"
            fullWidth
            required
            name="postalCode"
            value={address.postalCode}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Country</InputLabel>
            <Select
              label="Country"
              required
              name="country"
              value={address.country}
              onChange={handleInput}
            >
              <MenuItem value="usa">United States</MenuItem>
              <MenuItem value="canada">Canada</MenuItem>
              <MenuItem value="india">India</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>State</InputLabel>
            <Select
              label="State"
              required
              name="state"
              value={address.state}
              onChange={handleInput}
            >
              <MenuItem value="ny">New York</MenuItem>
              <MenuItem value="ca">California</MenuItem>
              <MenuItem value="mh">Maharashtra</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

const CreditCardForm = () => {
  const [creditCard, setCreditCard] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleCreditCardInput = (e) => {
    const { name, value } = e.target;
    setCreditCard((prevCreditCard) => ({ ...prevCreditCard, [name]: value }));
  };

  return (
    <>
      <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '26px' }}>Credit Card</Typography>
      <Grid container spacing={2} sx={{ p: '20px' }}>
        <Grid item xs={12}>
          <TextField
            label="Cardholder Name"
            variant="outlined"
            fullWidth
            required
            name="cardholderName"
            value={creditCard.cardholderName}
            onChange={handleCreditCardInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Card Number"
            variant="outlined"
            fullWidth
            required
            name="cardNumber"
            value={creditCard.cardNumber}
            onChange={handleCreditCardInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Expiry Date"
            variant="outlined"
            fullWidth
            required
            name="expiryDate"
            value={creditCard.expiryDate}
            onChange={handleCreditCardInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="CVV"
            variant="outlined"
            fullWidth
            required
            name="cvv"
            value={creditCard.cvv}
            onChange={handleCreditCardInput}
          />
        </Grid>
      </Grid>
    </>
  );
};

const CheckoutForm = () => {
  const handlePlaceOrder =()=>{
    
  }
  return (
    <form>
      <ShippingAddressForm  />
      <Box mt={4} />
      <CreditCardForm />
      <Box mt={4} />
      <Button variant="contained" color="primary" onClick={handlePlaceOrder}>
        Place Order
      </Button>
    </form>
  );
};

export default CheckoutForm;
