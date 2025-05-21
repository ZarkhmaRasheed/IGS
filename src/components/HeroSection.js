import React from 'react';
import { Box, Typography, Button, Container, useMediaQuery, useTheme } from '@mui/material';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        pt: { xs: '56px', sm: '64px' },
        height: isMobile ? '60vh' : '80vh',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: isMobile ? '100%' : '60%' }}>
          <Typography variant={isMobile ? 'h4' : 'h2'} component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Innovative Global Solutions
          </Typography>
          <Typography variant={isMobile ? 'body1' : 'h6'} component="p" gutterBottom sx={{ mb: 3 }}>
            Transforming businesses with cutting-edge technology and strategic consulting.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" color="primary" size="large">
              Get Started
            </Button>
            <Button variant="outlined" color="secondary" size="large">
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;