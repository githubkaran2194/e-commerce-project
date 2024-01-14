import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FeaturedData from './FeaturedData';
import { Link } from 'react-router-dom';

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

    return (
        <Container maxWidth="xl" sx={{ m: "20px 0" }}>
            <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <Typography sx={{ fontSize: '1.2rem','&:hover':{textDecoration:"underline"}  }}>Featured Products</Typography>
            <Typography sx={{ fontSize: '1.2rem','&:hover':{textDecoration:"underline"} }}>
            <Link to='/product' style={{textDecoration:"none", color:"black"}}>more products →</Link>
            </Typography>
            </Box>
            <Carousel responsive={responsiveSettings}>
                {FeaturedData.map((item) => (
                    <Card
                        key={item.id}
                        sx={{
                            cursor: 'pointer',
                            m: "10px 5px",
                            height: "90%",
                            '&:hover': {
                                '& img': {
                                    transform: 'scale(1.1)',
                                },
                            },
                        }}
                    >
                        <CardMedia
                            src={item.image}
                            component={'img'}
                            sx={{
                                objectFit: "contain",
                                height: "140px",
                                transition: "0.4s",
                                p:"15px"
                            }}
                        />
                        <CardContent>
                            <Typography sx={{'&:hover':{textDecoration:"underline"} }}>{item.title}</Typography>
                            <Typography>{item.price}</Typography>
                            <Typography>{item.rating.rate}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Carousel>
        </Container>
    );
};

export default FeaturedProducts;
