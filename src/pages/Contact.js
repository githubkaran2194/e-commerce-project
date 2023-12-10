import { Container, Paper, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(user.name.trim() === '' || user.email.trim() === '' || user.message.trim() === '') {
      alert("Please enter all required fields")
    }else{
      try {
        const response = await axios.post(
          "https://e-commerce-889c3-default-rtdb.firebaseio.com/e-commerce.json",
          user,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = response.data;
        console.log(data);
      }
      catch (error) {
        console.error("Error sending message:", error);
      }
    }
    setUser({
      name: "",
      email: "",
      message: "",
    })
  };

  return (
    <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: "20px" }}>
      <Paper component="form" sx={{ p: '20px', width: '100%', maxWidth: '400px' }} onSubmit={handleSubmit}>
        <Typography textAlign={'center'} m={'10px'} fontWeight={'bold'}>Contact us</Typography>
        <TextField
          name="name"
          label="Name"
          fullWidth
          type='text'
          margin="dense"
          variant="outlined"
          value={user.name}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          fullWidth
          type='email'
          margin="dense"
          variant="outlined"
          value={user.email}
          onChange={handleChange}
        />
        <TextField
          name="message"
          label="Message"
          type='text'
          fullWidth
          value={user.message}
          onChange={handleChange}
          margin="dense"
          rows={4}
          multiline
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: '10px' }}>
          Send Message
        </Button>
      </Paper>
    </Container>
  );
};

export default Contact;
