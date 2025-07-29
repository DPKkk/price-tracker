import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ productName, setProductName }) {
  return (
    <TextField
      placeholder="Search for a product..."
      variant="outlined"
      fullWidth
      value={productName}
      onChange={(e) => setProductName(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
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
