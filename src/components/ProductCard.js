import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

export default function ProductCard({ result, onAddToWishlist, isWishlisted }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={result.imageUrls ? result.imageUrls[0] : ""}
        alt={result.productName}
      />
      <CardContent>
        <Typography variant="h6">{result.productName}</Typography>
        <Typography variant="body2">Price: {result.price}</Typography>
        <Typography variant="body2">
          Rating: {result.rating || "N/A"}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
          <Button
            variant="contained"
            color="primary"
            href={result.productUrl}
            target="_blank"
          >
            View Product
          </Button>
          <Button
            variant="outlined"
            onClick={() => onAddToWishlist(result)}
            disabled={isWishlisted}
          >
            {isWishlisted ? "Wishlisted" : "+ Wishlist"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
