import React, { useState } from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Box, Button, Typography, Container } from '@mui/material';

const CheckoutForm = () => {

  const [address, setAddress] = useState({
    fName: '',
    lName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    state: '',
  });

  const [creditCard, setCreditCard] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleCreditCardInput = (e) => {
    const { name, value } = e.target;
    setCreditCard((prevCreditCard) => ({ ...prevCreditCard, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      const requiredAddressFields = ['fName', 'lName', 'address', 'city', 'postalCode', 'country', 'state'];
      const missingAddressFields = requiredAddressFields.filter(field => address[field].trim() === '');
    
      const requiredCreditCardFields = ['cardholderName', 'cardNumber', 'expiryDate', 'cvv'];
      const missingCreditCardFields = requiredCreditCardFields.filter(field => creditCard[field].trim() === '');
    
      if (missingAddressFields.length > 0 || missingCreditCardFields.length > 0) {
        const missingFields = [...missingAddressFields, ...missingCreditCardFields];
        alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      } else {
        alert('Successfully entered!');
      } 
  }
  return (
    <Box>
   <Container>
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

   <Button variant='contained' onClick={handleSubmit}>Submit</Button>
   </Container>
    </Box>
  );
};

export default CheckoutForm;
