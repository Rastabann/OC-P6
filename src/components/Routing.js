import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Housing from "../pages/Housing";

export default function Routing() {
  const [selectedItem, setSelectedItem] = useState();

  function handleSetItem(item) {
    setSelectedItem(item);
  }
  return (
    <Routes>
      <Route path="/" element={<Home handleSetItem={handleSetItem} />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing" element={<Housing item={selectedItem} />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace={true} />} />
    </Routes>
  );
}
