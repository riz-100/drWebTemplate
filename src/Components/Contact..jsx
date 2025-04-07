import { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [responseMsg, setResponseMsg] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/send-email", formData);
            setResponseMsg(response.data.message);
        } catch (error) {
            setResponseMsg("Failed to send message.");
        }
    };

    return (
        <Container>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <TextField label="Name" name="name" fullWidth margin="normal" onChange={handleChange} />
                <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} />
                <TextField label="Message" name="message" fullWidth multiline rows={4} margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">Send</Button>
            </form>
            {responseMsg && <p>{responseMsg}</p>}
        </Container>
    );
};

export default Contact;

