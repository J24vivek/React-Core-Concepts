import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Back from "./components/back";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Nav />
      <Back />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
