import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";

const CreateProducts = () => {
  const [items, setItems] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "", 
    rating: "", 
    brand: "",
    category: "",
    images: "",
    thumbnail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItems((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isAnyFieldEmpty =
    Object.values(items).some((value) => value.trim() === "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAnyFieldEmpty) {
      alert("Please fill in all fields");
    } else {
      try {
        const response = await axios.post(
          "https://6437a3340c58d3b145754311.mockapi.io/API/products",
          items
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          p: "20px",
          mt: { xs: "200px" },
        }}
      >
        <Paper component="form" onSubmit={handleSubmit} sx={{ p: "20px" }}>
          <Typography variant="h5" gutterBottom>
            Create Products
          </Typography>
          <Grid container spacing={1}>
            {Object.keys(items).map((key) => (
              <Grid item xs={12} key={key}>
                <TextField
                  label={key}
                  fullWidth
                  margin="dense"
                  value={items[key]}
                  onChange={handleChange}
                  name={key}
                  type={key === "price" || key === "discountPercentage" || key === "rating" ? "number" : "text"}
                />
              </Grid>
            ))}
          </Grid>
          <Button type="submit" variant="contained" sx={{ mt: "10px" }}>
            Add Product
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default CreateProducts;
