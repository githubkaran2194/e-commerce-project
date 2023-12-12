import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './Firebase-auth';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    const handleResetPassword = async () => {
        try {
            if (email.trim() === '') {
                setError('Please enter your email.');
            } else {
                await sendPasswordResetEmail(auth, email);
                alert('Reset password email sent. Check your email.');
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
        setEmail('')
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
                <Paper component="form" sx={{ p: '20px' }}>
                    <Typography variant="h5" textAlign="center" fontWeight="bold" mb={2}>
                        Reset Password
                    </Typography>
                    <TextField
                        label="Enter Your Email"
                        fullWidth
                        margin="dense"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError(null); // Clear the error message when the user types
                        }}
                        error={Boolean(error)}
                        helperText={error}
                    />
                    <Button
                        variant="contained"
                        type="button"
                        sx={{ mt: '10px' }}
                        fullWidth
                        onClick={handleResetPassword}
                    >
                        Reset Password
                    </Button>
                    <Link to="/signin">
                        <Button sx={{ mt: '10px' }}>Back to Login</Button>
                    </Link>
                </Paper>
            </Container>
        </Box>
    );
};

export default ResetPassword;
