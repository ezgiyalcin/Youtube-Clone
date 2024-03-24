import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
import SearchResults from "./Pages/SearchResults";
import HomePage from "./Pages/HomePage";
import HeaderComp from "./Components/HeaderComp";

function App() {
  return (
    <BrowserRouter>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch" element={<DetailPage />} />
        <Route path="/results" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
