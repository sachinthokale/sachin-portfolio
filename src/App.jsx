import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import PageTransition from "./components/PageTransition";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

const App = () => {
  return (
    <Router>
      {/* <PageTransition> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* </PageTransition> */}
    </Router>
  );
};

export default App;
