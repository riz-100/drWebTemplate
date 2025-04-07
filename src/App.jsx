import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact.";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
    return (
        <Router>
          <div className="app-wrapper">
            <Navbar />
            <div className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </div>
            <Footer />
            </div>
        </Router>
    );
};

export default App;
