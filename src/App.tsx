import { Box } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./components/About";
import LetsTalk from "./components/LetsTalk";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <About />
      <LetsTalk />
      <Footer />
    </Box>
  );
};

export default App;
