import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './Firebase-auth';

const Signup = () => {
    const [values, setvalues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState({
        name: false,
        email: false,
        password: false,
    });

    const navigate = useNavigate();
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [registrationError, setRegistrationError] = useState(false);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setvalues({ ...values, [name]: value });
        setError({ ...error, [name]: value.trim() === '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitDisabled(true);

        const hasError = !values.name || !values.email || !values.password;

        setError({
            name: !values.name,
            email: !values.email,
            password: !values.password,
        });

        if (!hasError) {
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then(async (response) => {
                    setSubmitDisabled(false)
                    const user = response.user;
                   await updateProfile(user, {
                        displayName: values.name,
                    });
                    setvalues({
                        name: '',
                        email: '',
                        password: '',
                    });
                    alert('Registration successful');
                    navigate('/');
                })
                .catch(err => {
                    setRegistrationError(err.message);
                    console.log(err.message);
                    alert(err.message);
                })
                .finally(() => {
                    setSubmitDisabled(false);
                });
        } else {
            setSubmitDisabled(false);
        }
    };

    return (
        <Container maxWidth="xs">
            <Paper component="form" sx={{ p: '20px', mt: '100px' }} onSubmit={handleSubmit}>
                <Typography textAlign="center" fontWeight="bold" variant="h5">
                    Signup
                </Typography>
                <TextField
                    name="name"
                    label="Name"
                    margin="dense"
                    fullWidth
                    size="small"
                    value={values.name}
                    onChange={handleInput}
                    error={error.name}
                    helperText={error.name ? 'Name is required' : ''}
                />
                <TextField
                    name="email"
                    label="Email"
                    margin="dense"
                    fullWidth
                    size="small"
                    value={values.email}
                    onChange={handleInput}
                    error={error.email}
                    helperText={error.email ? 'Email is required' : ''}
                />
                <TextField
                    name="password"
                    label="Password"
                    margin="dense"
                    fullWidth
                    size="small"
                    type="password"
                    value={values.password}
                    onChange={handleInput}
                    error={error.password}
                    helperText={error.password ? 'Password is required' : ''}
                />
                {registrationError ? (
                    <Typography fontSize="small" color="error" textAlign="center" m="10px">
                        {registrationError}
                    </Typography>
                ) : ''}
                <Button fullWidth sx={{ textAlign: 'center', mt: '10px' }} variant="contained" type="submit" disabled={submitDisabled}>
                    Signup
                </Button>

                <Typography
                    component="p"
                    sx={{ fontSize: 'small', textAlign: 'center', m: '20px', color: 'grey' }}
                >
                    Already have an account? <Link to="/login" style={{ textDecoration: 'none', color: '#0791ff' }}>Login</Link>
                </Typography>
            </Paper>
        </Container>
    );
};

export default Signup;
