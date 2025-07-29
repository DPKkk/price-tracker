
import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (productUrl) => {
    const updatedWishlist = wishlist.filter(item => item.productUrl !== productUrl);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom>My Wishlist</Typography>
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
                <Button variant="contained" href={item.productUrl} target="_blank">View</Button>
                <Button variant="outlined" onClick={() => removeFromWishlist(item.productUrl)} sx={{ ml: 1 }}>Remove</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
