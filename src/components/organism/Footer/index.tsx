import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/joy";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const textStyles = { color: "#fff" };

const Footer: React.FC = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: "#282c34", overflow: "hidden", color: "#fff", mt: 5, p: 5}}>
            <Grid container spacing={4} justifyContent="center">
                {/* Contact Information */}
                <Grid xs={12} sm={6} md={3}>
                    <Typography sx={textStyles}>Contact Us</Typography>
                    <Typography sx={textStyles}>123 Koi Fish Lane</Typography>
                    <Typography sx={textStyles}>City, State, 12345</Typography>
                    <Typography sx={textStyles}>Email: info@koifish.com</Typography>
                    <Typography sx={textStyles}>Phone: +123-456-7890</Typography>
                </Grid>

                {/* Social Media Links */}
                <Grid xs={12} sm={6} md={3}>
                    <Typography sx={{ ...textStyles, mb: 2 }}>Follow Us</Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton sx={textStyles}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton sx={textStyles}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton sx={textStyles}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton sx={textStyles}>
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Grid>

                {/* Navigation Links */}
                <Grid xs={12} sm={6} md={3}>
                    <Typography sx={{ ...textStyles, mb: 2 }}>Quick Links</Typography>
                    <Link href="/" underline="none" sx={{ ...textStyles, display: "block", mb: 1 }}>
                        Home
                    </Link>
                    <Link href="/about" underline="none" sx={{ ...textStyles, display: "block", mb: 1 }}>
                        About Us
                    </Link>
                    <Link href="/services" underline="none" sx={{ ...textStyles, display: "block", mb: 1 }}>
                        Services
                    </Link>
                    <Link href="/contact" underline="none" sx={{ ...textStyles, display: "block", mb: 1 }}>
                        Contact
                    </Link>
                </Grid>

                {/* Copyright Section */}
                <Grid xs={12} sm={6} md={3}>
                    <Typography sx={{ ...textStyles, mb: 2 }}>Legal</Typography>
                    <Typography sx={{ ...textStyles, mb: 1 }}>
                        © 2024 Koi Fish Co. All rights reserved.
                    </Typography>
                    <Link href="/privacy-policy" underline="none" sx={{ ...textStyles, display: "block", mb: 1 }}>
                        Privacy Policy
                    </Link>
                    <Link href="/terms-of-service" underline="none" sx={{ ...textStyles, display: "block", mb: 1 }}>
                        Terms of Service
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
