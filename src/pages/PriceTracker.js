

import React, { useState } from "react";

import {

  Box,

  Paper,

  Typography,

  Button,

  Grid

} from "@mui/material";

import priceComparisonLogo from "../utils/Images/priceComparison.png";

import backgroundImage from "../utils/Images/image.png";

import { callApi, callmock } from "../apis/api";

import SearchBar from "../components/SearchBar";

import ProductCard from "../components/ProductCard";

import Filters from "../components/Filters";

import { useNavigate } from "react-router-dom";



export default function PriceTracker() {

  const [searchResults, setSearchResults] = useState([]);

  const [loading, setLoading] = useState(false);

  const [productName, setProductName] = useState("");

  const [hasSearched, setHasSearched] = useState(false);

  const [sortOption, setSortOption] = useState("priceLowHigh");

  const [useMock, setUseMock] = useState(false);

  const navigate = useNavigate();



  const websiteNames = ["Amazon", "Flipkart", "Croma", "Reliance Digital", "Samsung India"];



  const handleSearch = async () => {

    if (!productName.trim()) {

      // If the search bar is empty, clear the search results

      setSearchResults([]);

      setHasSearched(false);

      return;

    }



    setLoading(true);

    setHasSearched(true);

    const results = useMock

      ? await callmock(productName, websiteNames)

      : await callApi(productName, websiteNames);

    setSearchResults(results);

    setLoading(false);

  };

  const handleInputChange = (input) => {

    if (!input.trim()) {

      setSearchResults([]); // Clear search results immediately

      setHasSearched(false);

    }

  };

  const addToWishlist = (product) => {

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.some(item => item.productUrl === product.productUrl);

    if (!exists) {

      wishlist.push(product);

      localStorage.setItem("wishlist", JSON.stringify(wishlist));

    }

  };



  const sortedResults = [...searchResults].sort((a, b) => {

    if (sortOption === "priceLowHigh") return parseInt(a.price) - parseInt(b.price);

    if (sortOption === "priceHighLow") return parseInt(b.price) - parseInt(a.price);

    if (sortOption === "ratingHighLow") return parseFloat(b.rating || 0) - parseFloat(a.rating || 0);

    return 0;

  });



  return (

    <Box

      sx={{

        minHeight: "100vh",

        // width: "100vw",

        display: "flex",

        flexDirection: "column",

        alignItems: "center",

        padding: 4,

        backgroundImage: `url('${backgroundImage}')`,

        backgroundSize: "cover",

        backgroundPosition: "center",

        backgroundRepeat: "no-repeat",

        overflow: "hidden",

        position: "relative"

      }}

    >

      {/* Top-right buttons */}

      <Box sx={{ position: "absolute", top: 16, right: 8, display: "flex", gap: 1 }}>

      <Button

    variant="contained"

    size="small"

    sx={{

      backgroundColor: "#64b5f6",

      color: "#fff",

      fontSize: "0.7rem",

      padding: "2px 6px",

      minWidth: "auto"

    }}

    onClick={() => navigate("/wishlist")}

  >

    Wishlist

  </Button>

  <Button

    variant="contained"

    size="small"

    sx={{

      backgroundColor: "#5c6bc0",

      color: "#fff",

      fontSize: "0.7rem",

      padding: "2px 6px",

      minWidth: "auto"

    }}

    onClick={() => navigate("/price-history")}

  >

    History

  </Button>

</Box>







      {/* Header */}

      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 4 }}>

        <Typography variant="h5" fontWeight="bold" sx={{ display: "flex", alignItems: "center", color: "#ffffff" }}>

          <Box component="img" src={priceComparisonLogo} alt="Price Tracker Logo" sx={{ width: 32, height: 32, marginRight: 1 }} />

          PRICE TRACKER

        </Typography>

      </Box>



      {/* Search Section */}

      <Paper elevation={3} sx={{

        width: "100%",

        maxWidth: 600,

        padding: 2,

        borderRadius: "16px",

        marginBottom: 2,

        backgroundColor: "rgba(255, 255, 255, 0.3)",

        backdropFilter: "blur(10px)",

        boxShadow: "0 4px 20px rgba(0,0,0,0.2)"

      }}>

        <SearchBar productName={productName} setProductName={setProductName} handleInputChange={handleInputChange} />

        <Button variant="contained" sx={{ marginTop: 2, backgroundColor: "#1976d2", color: "#fff" }} onClick={handleSearch}>

          Search

        </Button>

      </Paper>



      {/* Filters Section */}

      <Box sx={{ width: "100%", maxWidth: 600, marginBottom: 2 }}>

        <Filters

          sortOption={sortOption}

          setSortOption={setSortOption}

          useMock={useMock}

          setUseMock={setUseMock}

        />

      </Box>



      {/* Results */}

      {hasSearched && sortedResults.length === 0 ? (

        <Typography variant="h6" sx={{ color: "#ffffff" }}>No results found. Please try again.</Typography>

      ) : (

        <Grid container spacing={2} sx={{ maxWidth: 1200 }}>

          {sortedResults.map((result, index) => (

            <Grid item xs={12} sm={6} md={4} key={index}>

              <ProductCard

                result={result}

                onAddToWishlist={addToWishlist}

              />

            </Grid>

          ))}

        </Grid>

      )}

    </Box>

  );

}