import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  InputAdornment,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import priceComparisonLogo from "../utils/Images/priceComparison.png";
import backgroundImage from "../utils/Images/image.png";
import { callApi } from "../apis/api";
import searchApiResponse from "../mockups/searchApiResponse";
export default function PriceTracker() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productName, setProductName] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setHasSearched(true);
    const productName = "Samsung Galaxy S25"; // Replace with dynamic input
    const websiteNames = [
      "Amazon",
      "Flipkart",
      "Croma",
      "Reliance Digital",
      "Samsung India",
    ];

    // Filter mock data based on partial match
    const results = searchApiResponse.filter((product) =>
      product.productName.toLowerCase().includes(productName.toLowerCase())
    );

    console.log(results); // Debugging: Check filtered results
    setSearchResults(results);
    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 4,
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover", // Ensures the image covers the entire viewport
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        overflow: "hidden", // Prevents scrollbars
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 4,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            component="img"
            src={priceComparisonLogo}
            alt="Price Tracker Logo"
            sx={{
              width: 32,
              height: 32,
              marginRight: 1,
            }}
          />
          PRICE TRACKER
        </Typography>
      </Box>

      {/* Search Bar */}
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 600,
          padding: 2,
          borderRadius: "16px",
          marginBottom: 4,
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Transparent white background
          backdropFilter: "blur(10px)", // Adds a blur effect to the background
        }}
      >
        <TextField
          placeholder="Search for a product..."
          variant="outlined"
          fullWidth
          value={productName} // Bind input value to state
          onChange={(e) => {
            const value = e.target.value;
            setProductName(value);
            if (value.trim() === "") {
              setSearchResults([]);
              setHasSearched(false);
            }
          }}
          // Update state on input change
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Slightly transparent background for the input field
            borderRadius: "8px",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: 2,
            backgroundColor: "#007BFF", // Adjust button color to match the theme
            "&:hover": {
              backgroundColor: "#0056b3", // Darker shade on hover
            },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Paper>

      {/* Search Results */}
      {/* Search Results */}

      {hasSearched && searchResults.length === 0 ? (
        <Typography variant="h6">
          No results found. Please try again.
        </Typography>
      ) : (
        <Grid container spacing={2} sx={{ maxWidth: 1200 }}>
          {searchResults.map((result, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                  <Button
                    variant="contained"
                    color="primary"
                    href={result.productUrl}
                    target="_blank"
                  >
                    View Product
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
