import { useEffect, useState } from "react";

import "./styles/globals.css";

import Loader from "./components/Loader/Loader";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;