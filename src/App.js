import Navbar from "./navbar";
import Section from "./Section";
import Footer from "./Footer";
import logo from "./logo.svg";
import "./App.css";
import Models from "./Models";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";
import Chiron from "./page3";
import Bolide from "./page4";
import Centodieci from "./page5";
import Mistral from "./page6";
import Product from "./product";
import Contact from "./contact";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/about" element={<Page2 />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chiron" element={<Chiron />} />
          <Route path="/bolide" element={<Bolide />} />
          <Route path="/centodieci" element={<Centodieci />} />
          <Route path="/mistral" element={<Mistral />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
