import React from "react";
import "./App.css";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";
import Gallery from "./components/Gallery/gallery";
import Team from "./components/Team/team";
import Construction from "./components/Construction/Construction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/Home/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/construction" element={<Construction />} />
      </Routes>
    </Router>
  );
}

export default App;
