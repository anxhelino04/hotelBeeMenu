import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import OrderCard from "../components/OrderCard";
import ProductList from "../components/ProductList";

const Home = ({ darkMode, toggleDarkMode }) => {
  console.log("Home rendered");

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Container maxWidth="lg" sx={{ pt: 6 }}>
        <Box
          display="flex"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: "25px",
          }}>
          <Box flex={3}>
            <Typography variant="h5">Daily Menu</Typography>
            <ProductList />
          </Box>
          <OrderCard darkMode={darkMode} />
        </Box>
      </Container>
    </>
  );
};

export default Home;
