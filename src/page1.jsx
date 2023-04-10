import React from "react";
import Models from "./Models";
import Navbar from "./navbar";
import Section from "./Section";
import Footer from "./Footer";
import "./App.css";
import { motion, useScroll, useSpring } from "framer-motion";

const Page1 = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      <Navbar />
      <Section />
      <Models />
      <Footer />
    </div>
  );
};

export default Page1;
