import React from 'react';
import { Box, Container, Typography, Grid, Link as MuiLink } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Services',
      links: ['Consulting', 'Development', 'Analytics', 'Security']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Contact', 'Blog']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 6, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {footerLinks.map((column, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {column.title}
              </Typography>
              {column.links.map((link, linkIndex) => (
                <Typography key={linkIndex} variant="body2" sx={{ mb: 1 }}>
                  <MuiLink href="#" color="text.secondary" underline="hover">
                    {link}
                  </MuiLink>
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <MuiLink href="#" color="inherit">
            <Facebook />
          </MuiLink>
          <MuiLink href="#" color="inherit">
            <Twitter />
          </MuiLink>
          <MuiLink href="#" color="inherit">
            <LinkedIn />
          </MuiLink>
          <MuiLink href="#" color="inherit">
            <Instagram />
          </MuiLink>
        </Box>
        
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} IGS. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;