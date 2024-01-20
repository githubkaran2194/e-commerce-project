import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Pagination, Typography } from "@mui/material";
import axios from "axios";
import FilterSection from "./FilterSection";
import { ToastContainer, toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { More, ShoppingCart } from "@mui/icons-material";

const Product = ({ addToCart }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const LastIndex = currentPage * itemsPerPage;
  const FirstIndex = LastIndex - itemsPerPage;
  const currentItem = filterData.slice(FirstIndex, LastIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const navigate = useNavigate();

  const handleSubmit = (id) => {
    navigate(`/productDetails/${id}`);
  };

  useEffect(() => {
    const apiUrl = `https://6437a3340c58d3b145754311.mockapi.io/API/products`;

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
        setFilterData(response.data);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilterData(data);
    } else {
      const updatedFilter = data.filter((item) =>
        item.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilterData(updatedFilter);
    }
    setCurrentPage(1); // Reset page when applying a filter
  };

  return (
    <Container sx={{ mb: "10px ", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <FilterSection handleFilter={handleFilter} />
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <PulseLoader color="white" size={40} />
        </Box>
      ) : filterData === null || filterData.length === 0 ? (
        <Typography variant="h6" color="text.secondary" sx={{ mt: 4 }}>
          No products found.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {currentItem.map((item) => (
            <Grid
              item
              key={item.id}
              xs={6}
              sm={4}
              md={3}
              lg={3}
              sx={{ mb: "20px" }}
            > <Card
              sx={{ height: '100%', m: 1, p: '1px', cursor: "pointer", ':hover': { boxShadow: "0px 0px 10px 0px" } }}
            >
                <CardMedia
                  component="img"
                  src={'https://m.media-amazon.com/images/I/31+kqyt854L._AC_SY400_.jpg'}
                  alt={item.title}
                  height="140"
                  sx={{ objectFit: "contain",mt:"10px" }}
                  onClick={() => handleSubmit(item.id)}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography component="div" fontSize={"16px"} color="black" m='10px 0'>
                    {item.title}
                  </Typography>
                  <Typography color="grey" sx={{ color: "grey" }}>
                    {item.brand}
                  </Typography>
                  <Typography color="black" fontWeight={'bold'}>
                    ${item.price.toFixed(2)} {''}
                    $<span style={{textDecoration:"line-through"}}>{(item.price / (1 - item.discountPercentage / 100)).toFixed(2)}</span>
                  </Typography>
                  <Typography color="error">${item.discountPercentage} OFF</Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={() => addToCart(item) && toast("Added to cart")}
                  >
                    <ShoppingCart />
                  </Button>
                  <ToastContainer />

                  <Button
                    variant="contained"
                    color="info"
                    size="small"
                    onClick={() => handleSubmit(item.id)}
                  >
                    <More />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Pagination
        count={Math.ceil(filterData.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ mt: 2 }}
      />
    </Container>
  );
};

export default Product;
