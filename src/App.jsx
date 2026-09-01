import "./styles/globals.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      {/* <h1>test</h1> */}
    </>
  )
}

export default App