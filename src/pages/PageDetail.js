import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Snackbar, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';

const PageDetail = ({ addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
        const apiUrl = `https://6437a3340c58d3b145754311.mockapi.io/API/products`;

        const fetchProduct = async () => {
            try {
                const response = await axios.get(apiUrl);
                const productData = response.data[id - 1]; 
                setProduct([productData]);
                setLoading(true)
            } catch (error) {
               alert(error);
                setError(error.message || 'An error occurred while fetching the product.');
                setSnackbarOpen(true);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    if (loading) {
        return <PulseLoader/>
    }

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Grid container spacing={3}>
                {product.map((item) => (
                    <Grid item key={item.id} xs={12} sm={12} md={8} lg={8} sx={{ m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '20px',
                            }}
                        >
                            <CardMedia
                                component="img"
                                src={item.thumbnail}
                                alt={item.title}
                                height="140"
                                sx={{ objectFit: "contain"}}
                            />
                            <CardContent
                                sx={{
                                    flexGrow: 1,
                                }}
                            >
                                <Typography
                                    component="div"
                                    variant="h6"
                                    sx={{ marginBottom: '10px', fontWeight: 'bold', color: 'primary.main' }} 
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    sx={{ marginBottom: '10px', color: 'text.primary' }} 
                                >
                                    {item.description}
                                </Typography>
                                <Typography color="text.secondary">{item.brand}</Typography>
                                <Typography color="text.secondary">${item.price}</Typography>
                                <Typography color="secondary">discountPercentage $ {item.discountPercentage}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' color='success' onClick={() => addToCart(item)} size='small'>
                                    Add To Cart
                                </Button>
                                <Link to='/product' style={{ textDecoration: 'none' }}>
                                    <Button variant='contained' color='error' sx={{ ml: "10px" }} size='small'>
                                        Back to products
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message={error}
            />
        </Container>
    );
};

export default PageDetail;