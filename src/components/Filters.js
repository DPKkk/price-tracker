import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem, Switch, Typography } from "@mui/material";

export default function Filters({ sortOption, setSortOption, useMock, setUseMock }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Sort By</InputLabel>
        
<Select
  value={sortOption}
  label="Sort By"
  onChange={(e) => setSortOption(e.target.value)}
  MenuProps={{
    disableScrollLock: true, // This prevents scrollbar size calculation
  }}
>

          <MenuItem value="priceLowHigh">Price: Low to High</MenuItem>
          <MenuItem value="priceHighLow">Price: High to Low</MenuItem>
          <MenuItem value="ratingHighLow">Rating: High to Low</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography>Use Mock Data</Typography>
        <Switch checked={useMock} onChange={(e) => setUseMock(e.target.checked)} />
      </Box>
    </Box>
  );
}
