import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export default function SearchBar({ productName, setProductName, onSearch }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  const handleClear = () => {
    setProductName("");
  };

  return (
    <TextField
      placeholder="Search for a product..."
      variant="outlined"
      fullWidth
      value={productName}
      onChange={(e) => setProductName(e.target.value)}
      onKeyPress={handleKeyPress}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
        endAdornment: productName && (
          <InputAdornment position="end">
            <IconButton onClick={handleClear}>
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "8px",
      }}
    />
  );
}
