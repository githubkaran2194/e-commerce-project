import React, { useState } from 'react';
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from './Firebase-auth';

const Login = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.email.trim() || !user.password.trim()) {
      alert('Email and password are required.');
      return;
    }

    try {
      const response = await signInWithEmailAndPassword(auth, user.email, user.password);
      setIsLoggedIn(true);
      navigate('/');
      alert('User logged in: ' + response.user.email);
      setUser({
        email: '',
        password: '',
      });
    } catch (error) {
      alert('Login error: ' + error.message);
    }
  };

  return (
    <Box
    sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', 
    }}
>
    <Container maxWidth="xs">
      <Paper component="form" sx={{ p: '20px'}} onSubmit={handleSubmit}>
        <Typography textAlign="center" fontWeight="bold" variant="h5" m="10px">
          Login
        </Typography>
        <TextField
          name="email"
          label="Email"
          margin="dense"
          fullWidth
          size="small"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          name="password"
          label="Password"
          margin="dense"
          fullWidth
          size="small"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
        />
        <Button fullWidth sx={{ textAlign: 'center', marginTop:"10px" }} variant="contained" type="submit">
          Login
        </Button>
        <Typography component="p" sx={{ fontSize: 'small', textAlign: 'center', m: '20px', color: 'grey' }}>
        <Link to="/reset password" style={{ textDecoration: 'none'}}>
          forgot password ?
        </Link>
      </Typography>
        <Typography component="p" sx={{ fontSize: 'small', textAlign: 'center', m: '20px', color: 'grey' }}>
          Don't have an account? <Link to="/signup" style={{ textDecoration: 'none', color: 'primary' }}>
            Signup
          </Link>
        </Typography>
      </Paper>
    </Container>
    </Box>
  );
};  

export default Login;