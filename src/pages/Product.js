import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import FilterSection from "./FilterSection";
import { ToastContainer, toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

const Product = ({ addToCart }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

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
  };

  return (
    <Container sx={{ mt: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
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
          <CircularProgress variant="indeterminate" color="inherit" />
        </Box>
      ) : filterData === null || filterData.length === 0 ? (
        <Typography variant="h6" color="text.secondary" sx={{ mt: 4 }}>
          No products found.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filterData.map((item) => (
            <Grid
              item
              key={item.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ mb: "20px" }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                <CardMedia
                  component="img"
                  src={item.thumbnail}
                  alt={item.title}
                  height="140"
                  sx={productStyles.img}
                  onClick={() => handleSubmit(item.id)}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography component="div" fontSize={"16px"} color="primary">
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ color: "secondary.main" }}>
                    {item.brand}
                  </Typography>
                  <Typography color="text.secondary">
                    stock <span style={{ fontWeight: "bold", color: "success.main" }}>{item.stock}</span>
                  </Typography>
                  <Typography color="text.primary">${item.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => addToCart(item) && toast("Added to cart")}
                  >
                    Add To Cart
                  </Button>
                  <ToastContainer />

                  <Button
                    variant="contained"
                    color="info"
                    onClick={() => handleSubmit(item.id)}
                  >
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

const productStyles = {
  img: {
    objectFit: "contain",
    width: "100%",
    transition: "transform 0.5s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
};

export default Product;
