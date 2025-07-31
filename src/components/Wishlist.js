import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import backgroundImage from "../utils/Images/image.png";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (productUrl) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.productUrl !== productUrl
    );
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <Box
      sx={{
        padding: 4,
        minHeight: "89vh",
        width: "94.8vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          marginBottom: 4,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            color: "#1976d2", // blue theme color
            textAlign: "center",
          }}
        >
          My Wishlist
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            position: "absolute",
            right: 0,
            backgroundColor: "#1976d2",
            color: "#fff",
            fontSize: "0.75rem",
            padding: "4px 10px",
          }}
          onClick={() => (window.location.href = "/")}
        >
          Go to Home Page
        </Button>
      </Box>

      <Grid container spacing={2}>
        {wishlist.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.imageUrls[0]}
                alt={item.productName}
              />
              <CardContent>
                <Typography variant="h6">{item.productName}</Typography>
                <Typography variant="body2">Price: {item.price}</Typography>
                <Typography variant="body2">Rating: {item.rating}</Typography>
                <Button
                  variant="contained"
                  href={item.productUrl}
                  target="_blank"
                >
                  View
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => removeFromWishlist(item.productUrl)}
                  sx={{ ml: 1 }}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
