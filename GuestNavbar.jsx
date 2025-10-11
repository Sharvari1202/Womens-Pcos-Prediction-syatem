import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const GuestNavbar = () => {
    return (
        <>
            <style>
                {`
                /* General Navbar Style */
                .navbarStyle {
                    transition: all 0.3s ease;
                    /* Smooth transition for hover effects */
                }
                /* Logo and Text Alignment */
                .brandStyle {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    /* Add gap between logo and text */
                }
                /* Text Animation for Event Management */
                .textAnimationStyle {
                    font-size: 24px;
                    font-weight: bold;
                    margin-left: 25px;  
                    transition: transform 0.3s ease;
                    /* Smooth transition for zoom effect */
                }
                .textAnimationStyle:hover {
                    transform: scale(1.2);
                    /* Zoom in the text by 20% on hover */
                }
                /* Individual Style for Event and Management Text */
                .eventStyle {
                    padding-right: 20px;
                    font-size: 32px;
                    color: #ff5733;
                    /* Event color (red-orange) */
                    padding: 0 5px;
                }
                .managementStyle {
                    color: #33c1ff;
                    /* Management color (blue) */
                    padding: 0 5px;
                }
                /* Navigation Item Style */
                .navItemStyle {
                    font-size: 20px;
                    padding: 15px;
                    transition: all 0.3s ease;
                }
                /* Hover Effect for Navbar Items */
                .navbar:hover {
                    background-color: #333;
                }
                .navbar .nav-item:hover {
                    color: #ffcc00;
                    /* Change color on hover */
                    transform: scale(1.1);
                    /* Slightly enlarge the item on hover */
                }
                /* Logo Zoom Effect */
                .zoomEffect {
                    transition: transform 0.3s ease;
                    /* Smooth transition */
                }
                .zoomEffect:hover {
                    transform: scale(1.8);
                    /* Zoom in the image by 80% */
                }
                /* Keyframes for Typing Animation */
                @keyframes typing {
                    0% {
                        width: 0;
                    }
                    100% {
                        width: 14em;
                    }
                }
                /* Keyframes for Blinking Cursor Effect */
                @keyframes blink {
                    50% {
                        border-color: transparent;
                    }
                }
                /* Media Queries for Responsiveness */
                @media (max-width: 992px) {
                    .navbar-brand span {
                        font-size: 20px;
                        /* Reduce font size on smaller screens */
                    }
                    .navbar .nav-item {
                        font-size: 14px;
                        /* Smaller nav item font size on mobile */
                    }
                }
                @media (max-width: 576px) {
                    .navbar-brand span {
                        font-size: 18px;
                        /* Reduce font size even further on extra small screens */
                    }
                    .navbar .nav-item {
                        font-size: 12px;
                        /* Even smaller nav item font size on extra small screens */
                    }
                }
                `}
            </style>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" className="custom-navbar navbarStyle">
                <Container>
                    {/* Logo Image inside Navbar.Brand */}
                    <Navbar.Brand as={NavLink} to="/home" className="navbar-brand brandStyle">
                        <img
                            src="https://t4.ftcdn.net/jpg/06/58/52/67/240_F_658526752_reKZ5XIBNmCwlkeeAJS5lS1RMUxw6VWV.jpg" // Replace with your logo URL
                            alt="Event Management Logo"
                            className="zoomEffect"
                            style={{
                                width: '50px', // Adjust the width of the logo
                                height: 'auto', // Maintain aspect ratio
                                borderRadius: "60px"
                            }}
                        />
                        <span className='textAnimationStyle'>
                            <span className='eventStyle'>Event</span>
                            <span className='managementStyle'>Management</span>
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-label="Toggle navigation" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* Aligning the navigation links to the right */}
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/home" className="nav-item navItemStyle" >Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="nav-item navItemStyle" >About</Nav.Link>
                            <Nav.Link as={NavLink} to="/services" className="nav-item navItemStyle" >Services</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className="nav-item navItemStyle" >Contact</Nav.Link>
                            <Nav.Link as={NavLink} to="/register" className="nav-item navItemStyle" >Register</Nav.Link>
                            <Nav.Link as={NavLink} to="/login" className="nav-item navItemStyle" >Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default GuestNavbar;