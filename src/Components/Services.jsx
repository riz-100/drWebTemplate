import { Container, Typography, List, ListItem } from "@mui/material";

const Services = () => {
    return (
        <Container>
            <Typography variant="h4">Our Services</Typography>
            <List>
                <ListItem>General Checkup</ListItem>
                <ListItem>Pediatric Care</ListItem>
                <ListItem>Dermatology Consultation</ListItem>
            </List>
        </Container>
    );
};

export default Services;