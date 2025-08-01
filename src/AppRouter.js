import React from "react";
import { Routes, Route } from "react-router-dom";
import PriceTracker from "./pages/PriceTracker";
import Wishlist from "./components/Wishlist";
import PriceHistory from "./components/PriceHistory";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PriceTracker />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/price-history" element={<PriceHistory />} />
    </Routes>
  );
}
