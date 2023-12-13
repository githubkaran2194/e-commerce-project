import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const PageDetail = ({addToCart}) => {
    const { id } = useParams(); 
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const apiUrl = `https://fakestoreapi.com/products/${id}`;

        const fetchProduct = async () => {
            try {
                const response = await axios.get(apiUrl);
                setProduct([response.data]); 
                console.log(response.data);
            } catch (error) {
                console.log(error);
                alert(error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <Container sx={{display:'flex',justifyContent:"center", alignItems:"center", height:"100vh" }}>
            <Grid container spacing={3}>
                {
                    product.map((item) => (
                        <Grid item key={item.id} xs={12} sm={12} md={8} lg={8} sx={{ m:'auto', display:"flex", justifyContent:'center', alignItems:"center"}}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        padding: "20px",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        src={item.image}
                                        alt={item.title}
                                        height="140"
                                        sx={{ objectFit: "contain" }}
                                    />
                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                        }}
                                    >
                                        <Typography
                                            component="div"
                                            fontSize={'16px'}
                                            sx={{ marginBottom: '10px', fontWeight: 'bold' }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            sx={{ marginBottom: '10px' }}
                                        >
                                            {item.description}
                                        </Typography>
                                        <Typography color="text.secondary">${item.price}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant='contained' color='success' onClick={()=>addToCart(item)} size='small'>
                                            Add To Cart
                                        </Button>
                                        <Link to='/product' style={{textDecoration:'none'}}>
                                        <Button variant='contained' color='error' sx={{ml:"10px"}} size='small'>
                                        back to products
                                    </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default PageDetail;
