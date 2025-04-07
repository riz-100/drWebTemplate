import { Container, Typography } from "@mui/material";
import About from "./About";
import Services from "./Services";
import GoogleMap from "./Googlemap";
import "../CSS/Home.css"

const Home = () => {
    return (
        <div className="home">
        <Container sx={{ textAlign: "center", mt: 5 }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#1976D2" }}>Welcome to Our Clinic</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>Providing the best healthcare services with compassion and expertise.</Typography>
        </Container>
        <br />
        <Services />
        <br />
        {/* <About /> */}
        <GoogleMap />
        
        </div>

    );
};

export default Home;