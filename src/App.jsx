// import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="*" element={<ErrorPage />} />
    //   </Routes>
    // </Router>

    <>
      <Navbar />
      <Home />
      <Products />
      {/* <Services /> */}
      <About />
      <Contact />
    </>
  );
}

export default App;
