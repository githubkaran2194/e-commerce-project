import React, { useEffect, useState } from 'react';
import { Box, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { Card } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

const product = [{
    "id": 1,
    "productName": "Product A",
    "description": "Limited-time offer! Grab it now.",
    "price": 99.99,
    "discountPercentage": 15,
    "imageSrc": "https://example.com/productA.jpg"
},
{
    "id": 2,
    "productName": "Product B",
    "description": "Special deal on our bestseller.",
    "price": 149.99,
    "discountPercentage": 20,
    "imageSrc": "https://example.com/productB.jpg"
},
{
    "id": 3,
    "productName": "Product C",
    "description": "Exclusive offer for our loyal customers.",
    "price": 79.99,
    "discountPercentage": 10,
    "imageSrc": "https://example.com/productC.jpg"
},
{
    "id": 4,
    "productName": "Product D",
    "description": "Flash sale! Limited stock available.",
    "price": 129.99,
    "discountPercentage": 25,
    "imageSrc": "https://example.com/productD.jpg"
},
{
    "id": 5,
    "productName": "Product E",
    "description": "New arrival with a special introductory price.",
    "price": 89.99,
    "discountPercentage": 18,
    "imageSrc": "https://example.com/productE.jpg"
},
{
    "id": 6,
    "productName": "Product F",
    "description": "Weekend offer on this popular item.",
    "price": 109.99,
    "discountPercentage": 22,
    "imageSrc": "https://example.com/productF.jpg"
},
{
    "id": 7,
    "productName": "Product G",
    "description": "Deal of the day! Don't miss out.",
    "price": 69.99,
    "discountPercentage": 12,
    "imageSrc": "https://example.com/productG.jpg"
},
{
    "id": 8,
    "productName": "Product H",
    "description": "Holiday special with extra savings.",
    "price": 119.99,
    "discountPercentage": 30,
    "imageSrc": "https://example.com/productH.jpg"
},
{
    "id": 9,
    "productName": "Product I",
    "description": "Limited edition with a discounted price.",
    "price": 159.99,
    "discountPercentage": 18,
    "imageSrc": "https://example.com/productI.jpg"
},
{
    "id": 10,
    "productName": "Product J",
    "description": "Back in stock at a special reintroduction price.",
    "price": 79.99,
    "discountPercentage": 15,
    "imageSrc": "https://example.com/productJ.jpg"
}
]


const HotDeals = () => {
    const startTime = new Date();
    startTime.setHours(startTime.getHours() + 2);
    const initialTime = Math.floor((startTime - new Date()) / 1000);
    const [time, setTime] = useState(initialTime);
  
    useEffect(() => {
      const timerId = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
  
      return () => clearTimeout(timerId);
    }, [time]);
  
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
  
    return (
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          Hot Deals Ending In: <br/>
          <span style={{ marginLeft: "20px", background: "red", padding: "2px" }}>
            {hours}h {minutes}m {seconds}s
          </span>
        </Typography>
            <Carousel responsive={responsiveSettings}>
                {product.map((item) => (
                    <Card key={item.id} sx={{ height: '100%', m: 2, p: '2px', cursor: "pointer", ':hover': { boxShadow: "0px 0px 10px 0px" } }}>
                        <CardMedia
                            src={'https://m.media-amazon.com/images/I/71JU-bUt-sL._SX569_.jpg'}
                            component={'img'}
                            alt={item.productName}
                            sx={{ height: 150, objectFit: 'contain', mt: "30px" }}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="body1">{item.productName}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {item.description}
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2 }}>
                                ${item.price.toFixed(2)}{' '}
                                <span style={{ textDecoration: 'line-through', marginLeft: 1 }}>
                                    ${(item.price / (1 - item.discountPercentage / 100)).toFixed(2)}

                                </span>
                            </Typography>
                            <Typography variant="body2" color="error">
                                {item.discountPercentage}% OFF
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Carousel>
        </Container>);
};

export default HotDeals;
