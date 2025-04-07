import { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import "../CSS/About.css";

const About = () => {
    const images = ["/images/clinic1.jpg", "/images/clinic2.jpg", "/images/clinic3.jpg"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <Container className="about-container">
            <Typography variant="h4" className="about-title">About Our Clinic</Typography>
            <Typography variant="body1" className="about-text">
                We are committed to providing quality healthcare with advanced facilities and compassionate care.
            </Typography>
            <br />
            <div className="carousel">
                <Button variant="contained" onClick={handlePrev} className="carousel-button">Previous</Button>
                <img src={images[currentImageIndex]} alt="Clinic" className="carousel-image" />
                <Button variant="contained" onClick={handleNext} className="carousel-button">Next</Button>
            </div>
        </Container>
    );
};

export default About;
