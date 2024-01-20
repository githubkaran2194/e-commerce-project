import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, useNavigate } from 'react-router-dom';

const FeaturedProducts = () => {

    const responsiveSettings = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 2,
        },
    };

    const navigate = useNavigate();

    const handleSubmit = (id) => {
        navigate(`/productDetails/${id}`);
    }

    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`https://6437a3340c58d3b145754311.mockapi.io/API/products?limit=9`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchdata();
    }, []);

    return (
        <Container sx={{ p: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ fontSize: '1.2rem', '&:hover': { textDecoration: "underline" } }}>Featured Products</Typography>
                <Typography sx={{ fontSize: '1.2rem', '&:hover': { textDecoration: "underline" } }}>
                    <Link to='/product' style={{ textDecoration: "none", color: "black" }}>more products →</Link>
                </Typography>
            </Box>
            <Carousel responsive={responsiveSettings}>
                {products.map((item) => (
                    <Card
                        key={item.id}
                        sx={{
                            cursor: 'pointer',
                            height: "100%",
                            m:"10px",
                            '&:hover': {
                                '& img': {
                                    transform: 'scale(1.1)',
                                },
                            },
                            ':hover':{boxShadow:"0 0 10px"}
                        }}
                    >
                        <CardMedia
                            src={item.image || "https://m.media-amazon.com/images/I/81vP50SM2aL._AC_SY400_.jpg"}
                            component={'img'}
                            sx={{
                                objectFit: "contain",
                                height: 150,
                                transition: "0.4s",
                                p: "10px"
                            }}
                        />
                        <CardContent>
                            <Link style={{ textDecoration: "none",color:"black"}}>
                                <Typography sx={{ '&:hover': { textDecoration: "underline" },fontSize:"1rem"  }} textAlign={'center'}>{item.title}</Typography>
                            </Link>
                            <Typography textAlign={'center'} fontWeight={'bold'} m='10px'>
                            ${item.price.toFixed(2)} {''}
                            <span style={{textDecoration:"line-through"}}>${(item.price / (1 - item.discountPercentage / 100)).toFixed(2)}</span>
                            </Typography>
                            <Typography color={'error'} fontSize="13px" textAlign={'center'} >$ {item.discountPercentage} OFF</Typography>
                            <Button
                                variant="outlined"
                                sx={{ mt: "10px" }}
                                size='small'
                                fullWidth
                                onClick={() => handleSubmit(item.id)}
                            >
                                Details
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Carousel>
        </Container>
    );
};

export default FeaturedProducts;
