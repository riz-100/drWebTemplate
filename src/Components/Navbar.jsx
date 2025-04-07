import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import "../CSS/navbar.css";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <List className="mobile-nav">
            <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
                <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/services" onClick={handleDrawerToggle}>
                <ListItemText primary="Services" />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>
                <ListItemText primary="Contact" />
            </ListItem>
        </List>
    );

    return (
        <AppBar sx={{
            width: "100vw", 
            position: "static", 
        }} className="navbar">
        
            <Toolbar>
                <Typography variant="h6" className="navbar-title" >Doctor's Clinic</Typography>
                <div className="nav-links">
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                    <Button color="inherit" component={Link} to="/services">Services</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>
                </div>
                <IconButton edge="end" color="inherit" aria-label="menu" className="menu-button"  onClick={handleDrawerToggle}>
                    <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                    {drawer}
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;